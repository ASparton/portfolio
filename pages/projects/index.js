import PropTypes from 'prop-types';

/* React dependencies */
import { useState, useEffect } from 'react'

/* Next dependencies */
import Head from 'next/head';

/* Components */
// Layout
import Header from '/components/layout/Header.js';
import Footer from '/components/layout/Footer.js';

// Main
import Projects from '/components/Projects.js';
import Contact from '/components/Contact.js';

/* Styles */
import projectsIndexStyles from '/styles/pages/projectsIndex.module.css';
import globalStyles from '/styles/global.module.css';



/* Header navigation links */
const navLinks = [
  {
    id: 0,
    name: 'Home',
    ref: '/',
    title: 'Home page'
  },
  {
    id: 1,
    name: 'Filters',
    ref: '/projects/#filters',
    title: 'Filters section'
  },
  {
    id: 2,
    name: 'Projects',
    ref: '/projects/#projects',
    title: 'Projects section'
  },
  {
    id: 3,
    name: 'Contact',
    ref: '/projects/#contact',
    title: 'Contact section'
  }
];

export default function ProjectsIndex({categories, skills, projects}) {

  // offers the possibility to change the theme from white to black and vice versa
  const [isWhiteTheme, setIsWhiteTheme] = useState(true);

  /**
   * Changes the current theme from white to black or from black to white.
   * Also update the session theme variable.
   */
  function switchTheme() {
    setIsWhiteTheme((prev) => !prev);
    window !== undefined && sessionStorage.setItem('selectedTheme', isWhiteTheme ? 'white' : 'black');
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
        <title>Alexandre Sparton - All projects</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#fcf7f8" />
        <meta name="description" content="Here you can have an overview of all the projects I added on this website since the beginning and filter them by category or skill." />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="charset" content="utf-8" />
      </Head>

      <Header links={navLinks} isWhiteTheme={isWhiteTheme} switchThemeFunction={switchTheme} />
      <main>
        <h1 name="filters" className={`${projectsIndexStyles.title} ${isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}`}>
          Explore my projects
        </h1>
        <Projects dbCategories={categories} dbSkills={skills} dbProjects={projects} isWhiteTheme={isWhiteTheme} isSection={false} />
        <Contact isWhiteTheme={isWhiteTheme} />
      </main>
      <Footer isWhiteTheme={isWhiteTheme} />

    </div>
  )
}

ProjectsIndex.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  skills: PropTypes.arrayOf(PropTypes.object).isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired
};

export async function getStaticProps() {

  /* connect to db */
  const pgp = require('pg-promise')({
    noWarnings: true
  })
  
  const db = pgp({
    connectionString: process.env.DATABASE_URL,
    ssl: {rejectUnauthorized: false}
  });

  // Get the needed data from db
  let categories = await getAllCategories(db);
  let skills = await getAllSkills(db);
  let projects = await getAllProjects(db, categories, skills);

  return {
    props: {
      categories: categories,
      skills: skills,
      projects: projects
    },
    revalidate: 60
  };
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

  let dbProjects = await db.any('SELECT id, title, description, year, cover_url, category_id, repo_url FROM projects  ORDER BY id DESC');
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