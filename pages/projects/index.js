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

/* Styles */
import projectsIndexStyles from '/styles/pages/projectsIndex.module.css';
import globalStyles from '/styles/global.module.css';

function ProjectsIndex() {

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
        <title>Sparton Alexandre - All projects</title>
        <link rel="icon" href="/images/logo/logoBlack.png" />
      </Head>

      <Header isWhiteTheme={isWhiteTheme} switchThemeFunction={switchTheme} />
      <main>
        <h1 className={`${projectsIndexStyles.title} ${isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}`}>
          Explore my projects
        </h1>
        <Projects isWhiteTheme={isWhiteTheme} isSection={false} />
      </main>
      <Footer isWhiteTheme={isWhiteTheme} />

    </div>
  )
}
  
export default ProjectsIndex;