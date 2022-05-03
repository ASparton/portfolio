import PropTypes from 'prop-types';

/* React dependencies */
import { useState, useEffect } from 'react';

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
   * Also update the session theme variable.
   */
  function switchTheme() {
    setIsWhiteTheme((prev) => !prev);
    sessionStorage.setItem('selectedTheme', isWhiteTheme ? 'black' : 'white');
  }

  /**
   * If the theme is not set in session variables, add it with white by default.
   */
  useEffect(() => {
    let selectedTheme = sessionStorage.getItem('selectedTheme');
    if (selectedTheme === null) {
      sessionStorage.setItem('selectedTheme', 'white');
      setIsWhiteTheme(true);
    } else {
      setIsWhiteTheme(sessionStorage.getItem('selectedTheme') === 'white' ? true : false);
    }
  }, [])

  return (
    <div className={isWhiteTheme ? globalStyles.bodyWhite : globalStyles.bodyBlack}>
      
      <Head>
        <title>Alexandre Sparton - Portfolio</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#fcf7f8" />
        <meta name="description" content="Hello, I'm Alexandre Sparton, an innovative IT student and software developer currently specialized in fullstack web development. This portfolio gathers some of the projects I built over the years and also my areas of interest in the current moment." />
        <meta name="robots" content="index, follow" />*
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="charset" content="utf-8" />
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
  const fs = require('fs');
  const aboutText = fs.readFileSync('persistance/about.txt').toString();

  /* connect to db */
  const pgp = require('pg-promise')({
    noWarnings: true
  })

  const db = pgp({
    connectionString: process.env.DATABASE_URL,
    ssl: {rejectUnauthorized: false}
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

  let dbProjects = await db.any('SELECT id, title, description, year, cover_url, category_id, repo_url FROM projects ORDER BY id DESC');
  dbProjects.map(function (project) {
    projects.push({
      id: parseInt(project.id),
      title: project.title,
      description: project.description,
      year: project.year.getFullYear(),
      cover_url: project.cover_url,
      category: categories.find(category => category.id === parseInt(project.category_id)).name,
      repo_url: project.repo_url,
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