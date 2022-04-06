import PropTypes from 'prop-types';

/* React dependencies */
import { useState } from 'react';

/* Next dependencies */
import Head from 'next/head';

/* Components */
// Layout
import Header from '/components/layout/Header.js';
import Footer from '/components/layout/Footer.js';

// Sections
import ProjectOverview from '/components/projects/ProjectOverview.js';
import ProjectSection from '/components/projects/ProjectSection.js';
import ProjectInImages from '/components/projects/ProjectInImages.js';
import Contact from '/components/Contact.js';

/* Styles */
import globalStyles from '/styles/global.module.css';

export default function ProjectPage({headerNavLinks, projectInfos}) {

  // offers the possibility to change the theme from white to black and vice versa
  const [isWhiteTheme, setIsWhiteTheme] = useState(true);

  /**
   * Changes the current theme from white to black or from black to white.
   */
  function switchTheme() {
    setIsWhiteTheme((prev) => !prev);
  }

  /**
   * @returns {array} containing the images and videos of the project completely shuffled.
   */
  function getImagesAndVideosBundle() {
    let bundle = []
    const iMax = projectInfos.images.length > projectInfos.videos.length ? projectInfos.images.length : projectInfos.videos.length;
    for (let i = 0; i < iMax; i++) {
      if (i < projectInfos.videos.length)
        bundle.push(projectInfos.videos[i]);
      if (i < projectInfos.images.length)
        bundle.push(projectInfos.images[i]);
    }
    return bundle;
  }

  return (
    <div className={isWhiteTheme ? globalStyles.bodyWhite : globalStyles.bodyBlack}>
      
      <Head>
        <title>{'Alexandre Sparton - ' + projectInfos.header.title}</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#fcf7f8" />
      </Head>

      <Header links={headerNavLinks} isWhiteTheme={isWhiteTheme} switchThemeFunction={switchTheme} />
      <main>
        {/* Overview */}
        <ProjectOverview projectHeader={projectInfos.header} isWhiteTheme={isWhiteTheme} />

        {/* Project details */}
        <ProjectSection sectionName={"more"} title={"More about " + projectInfos.header.title} 
                        text={projectInfos.details} isWhiteTheme={isWhiteTheme} />

        {/* Project experience */}
        <ProjectSection sectionName={"experience"} title={"My experience"} text={projectInfos.experience} isWhiteTheme={isWhiteTheme} />

        {/* Project images & videos */}
        <ProjectInImages projectTitle={projectInfos.header.title} 
                         imagesAndVideosBundle={getImagesAndVideosBundle()} 
                         isWhiteTheme={isWhiteTheme} />

        <Contact isWhiteTheme={isWhiteTheme} />
      </main>
      <Footer isWhiteTheme={isWhiteTheme} />

    </div>
  )
}

ProjectPage.propTypes = {
  headerNavLinks: PropTypes.arrayOf(PropTypes.object).isRequired,
  projectInfos: PropTypes.object.isRequired
};

export async function getServerSideProps(context) {

  /* connect to db */
  const pgp = require('pg-promise')({
    noWarnings: true
  })
  
  const db = pgp({
    connectionString: process.env.DATABASE_URL,
    ssl: {rejectUnauthorized: false}
  });

  // Get project infos
  const projectId = parseInt(context.params.id);

  // If the id is not a number, redirect to all projects page
  if (isNaN(projectId)) {
    return {
      redirect: {
        permanent: false,
        destination: '/projects/'
      },
    };
  }

  const projectInfos = await getProjectInfos(db, projectId);

  // If project is undefined, it means that the project with the given id does not exist in db, so redirect to all projects
  if (projectInfos === null) {
    return {
      redirect: {
        permanent: false,
        destination: '/projects/'
      }
    };
  }

  // Otherwise render the page
  return {
    props: {
      headerNavLinks: getHeaderNavLinks(projectId),
      projectInfos: projectInfos
    }
  }
}

/**
 * @param {int} projectId the id of the project the page is about
 * @returns the header navigation links with the right project id.
 */
function getHeaderNavLinks(projectId) {
  /* Header navigation links */
  return  [
    {
      id: 0,
      name: 'Home',
      ref: '/',
      title: 'Home page'
    },
    {
      id: 1,
      name: 'Projects',
      ref: '/projects/',
      title: 'Projects Page'
    },
    {
      id: 2,
      name: 'Overview',
      ref: '/projects/' + projectId + '/#overview',
      title: 'Overview section'
    },
    {
      id: 3,
      name: 'More about',
      ref: '/projects/' + projectId + '/#more',
      title: 'More about section'
    },
    {
      id: 4,
      name: 'My experience',
      ref: '/projects/' + projectId + '/#experience',
      title: 'My experience section'
    },
    {
      id: 5,
      name: 'Project in images',
      ref: '/projects/' + projectId + '/#inimages',
      title: 'Project in images section'
    }
  ];
}

/**
 * @param {*} db the pg-promise db instance
 * @param {int} projectId the project id to get the infos
 * @returns the needed informations about the project with the given id, null if the project does not exists.
 */
async function getProjectInfos(db, projectId) {

  let projectInfos = null;

  // Try to get the project infos
  await db.one('SELECT projects.title, projects.description, projects.year, projects.cover_url, ' +
                      'projects.details, projects.experience, categories.name ' +
               'FROM projects INNER JOIN categories ON projects.category_id = categories.id ' +
               'WHERE projects.id = $1', [projectId])
  .then(async standardInfos => {

    projectInfos = {
      header: {
        title: standardInfos.title,
        description: standardInfos.description,
        year: standardInfos.year.getFullYear(),
        cover_url: standardInfos.cover_url,
        category: standardInfos.name,
        skills: []
      },
  
      details: standardInfos.details,
      experience: standardInfos.experience,
      images: [],
      videos: []
    };
  
    // Set project skills
    let query = 'SELECT skills.name ' + 
                'FROM project_skills INNER JOIN skills on project_skills.skill_id = skills.id ' +
                'WHERE project_skills.project_id = $1';
    const skills = await db.any(query, [projectId]);
    skills.map(skill => projectInfos.header.skills.push(skill.name));
  
    // Set project images
    query = 'SELECT project_images.image_url ' +
            'FROM project_images ' +
            'WHERE project_images.project_id = $1';
    const images = await db.any(query, [projectId]);
    images.map(image => projectInfos.images.push(image.image_url));
  
    // Set project videos
    query = 'SELECT project_videos.video_url ' +
            'FROM project_videos ' +
            'WHERE project_videos.project_id = $1';
    const videos = await db.any(query, [projectId]);
    videos.map(video => projectInfos.videos.push(video.video_url));

  })
  // Means that the project with the given id doesn't exist in db
  .catch(() => (console.error('Project with id ' + projectId + ' does not exists.')));

  return projectInfos;
}