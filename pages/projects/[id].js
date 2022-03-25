/* React dependencies */
import { useState } from 'react';

/* Next dependencies */
import { useRouter } from 'next/router';
import Head from 'next/head';

/* Components */
// Layout
import Header from '/components/layout/Header.js';
import Footer from '/components/layout/Footer.js';

/* Styles */
import globalStyles from '/styles/global.module.css';

let dummyProject = {
  id: 0,
  title: "OpenFlappy",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
               "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  year: 2020,
  imageUrl: "https://img.phonandroid.com/2014/05/flappy-bird.jpg",
  category: "Graphics programming",
  skills: ["C++", "OpenGL"]
}

function ProjectPage() {

  dummyProject.id = useRouter().query.id;

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

      <Header isWhiteTheme={isWhiteTheme} switchThemeFunction={switchTheme} />
      <main>
        <h1 className={isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}>{dummyProject.title}</h1>
        <div>
          <img src={dummyProject.imageUrl} alt={dummyProject.title + " cover image"} title={dummyProject.title + " cover image"}/>
        </div>
      </main>
      <Footer isWhiteTheme={isWhiteTheme} />

    </div>
  )
}

export default ProjectPage;