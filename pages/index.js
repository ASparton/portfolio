/* React dependencies */
import { useState } from 'react'

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
import logoBlack from '/public/images/logo/logoBlack.png'
import logoWhite from '/public/images/logo/logoWhite.png'

export default function Home() {
  
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

      <Header isWhiteTheme={isWhiteTheme} switchThemeFunction={switchTheme} />
      <main>
        <About isWhiteTheme={isWhiteTheme} />
        <Technos isWhiteTheme={isWhiteTheme} />
        <Projects isWhiteTheme={isWhiteTheme} />
        <Contact isWhiteTheme={isWhiteTheme} />
      </main>
      <Footer isWhiteTheme={isWhiteTheme} />

    </div>
  )
}