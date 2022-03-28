/* React dependencies */
import { useState } from 'react';

/* Next dependencies */
import { useRouter } from 'next/router';
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

let dummyProject = {
  id: 0,

  header: {
    title: "OpenFlappy",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                 "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    year: 2020,
    coverUrl: "https://img.phonandroid.com/2014/05/flappy-bird.jpg",
    category: "Graphics programming",
    skills: ["C++", "OpenGL"]
  },

  details: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  experience: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  images: ["https://www.spriters-resource.com/resources/sheet_icons/56/59537.png", 
           "https://upload.wikimedia.org/wikipedia/en/0/0a/Flappy_Bird_icon.png"],
  videos: ["https://www.youtube.com/embed/NrJiXKwUjPI"]
}

function ProjectPage() {

  dummyProject.id = useRouter().query.id;

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
      name: 'Projects',
      ref: '/projects/',
      title: 'Projects Page'
    },
    {
      id: 2,
      name: 'Overview',
      ref: '/projects/' + dummyProject.id + '/#overview',
      title: 'Overview section'
    },
    {
      id: 3,
      name: 'More about',
      ref: '/projects/' + dummyProject.id + '/#more',
      title: 'More about section'
    },
    {
      id: 4,
      name: 'My experience',
      ref: '/projects/' + dummyProject.id + '/#experience',
      title: 'My experience section'
    },
    {
      id: 5,
      name: 'Project in images',
      ref: '/projects/' + dummyProject.id + '/#inimages',
      title: 'Project in images section'
    }
  ];

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
    const iMax = dummyProject.images.length > dummyProject.videos.length ? dummyProject.images.length : dummyProject.videos.length;
    for (let i = 0; i < iMax; i++) {
      if (i < dummyProject.videos.length)
        bundle.push(dummyProject.videos[i]);
      if (i < dummyProject.images.length)
        bundle.push(dummyProject.images[i]);
    }
    return bundle;
  }

  return (
    <div className={isWhiteTheme ? globalStyles.bodyWhite : globalStyles.bodyBlack}>
      
      <Head>
        <title>Alexandre Sparton</title>
        <link rel="icon" href="/images/logo/logoBlack.png" />
      </Head>

      <Header links={navLinks} isWhiteTheme={isWhiteTheme} switchThemeFunction={switchTheme} />
      <main>
        {/* Overview */}
        <ProjectOverview projectHeader={dummyProject.header} isWhiteTheme={isWhiteTheme} />

        {/* Project details */}
        <ProjectSection sectionName={"more"} title={"More about " + dummyProject.header.title} 
                        text={dummyProject.details} isWhiteTheme={isWhiteTheme} />

        {/* Project experience */}
        <ProjectSection sectionName={"experience"} title={"My experience"} text={dummyProject.experience} isWhiteTheme={isWhiteTheme} />

        {/* Project images & videos */}
        <ProjectInImages projectTitle={dummyProject.header.title} 
                         imagesAndVideosBundle={getImagesAndVideosBundle()} 
                         isWhiteTheme={isWhiteTheme} />

        <Contact isWhiteTheme={isWhiteTheme} />
      </main>
      <Footer isWhiteTheme={isWhiteTheme} />

    </div>
  )
}

export default ProjectPage;