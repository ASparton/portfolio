import PropTypes from 'prop-types';

/* External dependencies */
import fs from 'fs';

/* React dependencies */
import { useState } from 'react';

/* Next dependencies */
import Head from 'next/head';
import Image from 'next/image';

/* Components */
// Layout
import Header from '/components/layout/Header.js';
import Footer from '/components/layout/Footer.js';
// Sections
import About from '/components/About.js';
import Technos from '/components/Technos.js';
import Projects from '/components/Projects.js';
import Contact from '/components/Contact.js';

/* Styles */
import indexStyles from '/styles/pages/index.module.css';
import globalStyles from '/styles/global.module.css';

/* Images */
import logoBlack from '/public/logo/logoBlack.png';
import logoWhite from '/public/logo/logoWhite.png';

/* Header navigation links */
const navLinks = [
  {
    id: 0,
    name: 'About',
    ref: '/#about',
    title: 'About section'
  },
  {
    id: 1,
    name: 'Technologies & Tools',
    ref: '/#technos',
    title: 'Technologies & Tools section'
  },
  {
    id: 2,
    name: 'Projects',
    ref: '/#projects',
    title: 'Projects section'
  },
  {
    id: 3,
    name: 'Contact',
    ref: '/#contact',
    title: 'Contact section'
  }
];

export default function Home({ aboutText, technos, categories, skills, projects }) {
  
  // offers the possibility to change the theme from white to black and vice versa
  const [isWhiteTheme, setIsWhiteTheme] = useState(true);

  /**
   * Changes the current theme from white to black or from black to white.
   */
  function switchTheme() {
    setIsWhiteTheme((prev) => !prev);
  }

  return (
    <div className={isWhiteTheme ? globalStyles.bodyWhite : globalStyles.bodyBlack}>
      
      <Head>
        <title>Alexandre Sparton</title>
        <link rel="icon" href="/images/logo/logoBlack.png" />
      </Head>
      
      {/* Transition on page load */}
      <aside className={indexStyles.pageLoad}>
        <div className={indexStyles.pageLoadLogo}>
          <Image src={isWhiteTheme ? logoWhite : logoBlack} alt="Logo Alexandre Sparton"/>
        </div>
      </aside>

      <Header links={navLinks} isWhiteTheme={isWhiteTheme} switchThemeFunction={switchTheme} />
      <main>
        <About aboutText={aboutText} isWhiteTheme={isWhiteTheme} />
        <Technos technos={technos} isWhiteTheme={isWhiteTheme} />
        <Projects dbCategories={categories} dbSkills={skills} dbProjects={projects} isWhiteTheme={isWhiteTheme} isSection={true} />
        <Contact isWhiteTheme={isWhiteTheme} />
      </main>
      <Footer isWhiteTheme={isWhiteTheme} />

    </div>
  )
}

Home.propTypes = {
  aboutText: PropTypes.string.isRequired,
  technos: PropTypes.arrayOf(PropTypes.object).isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  skills: PropTypes.arrayOf(PropTypes.object).isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired
};

/**
 * Get the about text, technos & tools & the projects
 */
export async function getStaticProps() {

  // read the about text file
  const aboutText = fs.readFileSync('private/persistance/about.txt').toString();

  // connect to db
  const pgp = require('pg-promise')({
    noWarnings: true
  })
  const db = pgp({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PSWD
  });

  // Get the needed data from db
  let technos = await getAllTechnos(db);
  let categories = await getAllCategories(db);
  let skills = await getAllSkills(db);
  let projects = await getAllProjects(db, categories, skills);

  return {
    props: {
      aboutText: aboutText,
      technos: technos,
      categories: categories,
      skills: skills,
      projects: projects
    },
    revalidate: 60
  };
}

/**
 * @param {*} db pg-promise db instance
 * @returns all the technologies & tools registered in the database.
 */
async function getAllTechnos(db) {
  let technos = [];

  await db.any('SELECT * FROM technos')
  .then(function(dbTechnos) {
    dbTechnos.map(techno => technos.push({
      id: parseInt(techno.id),
      name: techno.name,
      icon_url: techno.icon_url,
      website_url: techno.website_url
    }));
  })
  .catch(function(error) {
    console.error(error);
  });

  return technos;
}

/**
 * @param {*} db pg-promise db instance
 * @returns all the categories registered in the database.
 */
 async function getAllCategories(db) {
  let categories = [];

  await db.any('SELECT * FROM categories')
  .then(function(dbCategories) {
    dbCategories.map(category => categories.push({
      id: parseInt(category.id),
      name: category.name,
      chosen: false
    }));
  })
  .catch(function(error) {
    console.error(error);
  });

  return categories;
}

/**
 * @param {*} db pg-promise db instance
 * @returns all the skills registered in the database.
 */
 async function getAllSkills(db) {
  let skills = [];

  await db.any('SELECT * FROM skills')
  .then(function(dbSkills) {
    dbSkills.map(skill => skills.push({
      id: parseInt(skill.id),
      name: skill.name,
      chosen: false
    }));
  })
  .catch(function(error) {
    console.error(error);
  });

  return skills;
}

/**
 * @param {*} db the pg-promise db instance
 * @param {array} categories all the categories registered in db
 * @param {array} skills all the skills registered in db
 * @returns all the projects registered in the database with their skills.
 */
async function getAllProjects(db, categories, skills) {
  let projects = [];

  let dbProjects = await db.any('SELECT id, title, description, year, cover_url, category_id FROM projects');
  dbProjects.map(function (project) {
    projects.push({
      id: parseInt(project.id),
      title: project.title,
      description: project.description,
      year: project.year.getFullYear(),
      cover_url: project.cover_url,
      category: categories.find(category => category.id === parseInt(project.category_id)).name,
      skills: []
    })
  });

  // Set project skills
  for (let project of projects) {
    await db.any('SELECT * FROM project_skills WHERE project_id = $1', [project.id])
    .then(dbProjectSkills => {
      dbProjectSkills.map(projectSkill => project.skills.push(skills.find(skill => skill.id === parseInt(projectSkill.skill_id)).name));
    })
    .catch(error => console.error(error));
  }

  return projects;
}