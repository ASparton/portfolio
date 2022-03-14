import { useState } from 'react'

import Head from 'next/head';

/* Components */
// Layout
import Header from '/components/layout/Header.js';
import Footer from '/components/layout/Footer.js';
// Sections
import About from '/components/About.js';
import Technos from '/components/Technos.js';
import Contact from '/components/Contact.js';

/* Style */
import styles from '/styles/layout/body.module.css';

export default function Home() {

  const [isWhiteTheme, setIsWhiteTheme] = useState(true);

  function switchTheme() {
    setIsWhiteTheme((prev) => !prev);
  }

  return (
    <div className={isWhiteTheme ? styles.bodyWhite : styles.bodyBlack}>
      <Head>
        <title>Alexandre Sparton</title>
        <link rel="icon" href="/images/logo/LogoBlack.png" />
      </Head>

      <Header isWhiteTheme={isWhiteTheme} switchThemeFunction={switchTheme} />
      <About />
      <Technos />
      <Contact />
      <Footer isWhiteTheme={isWhiteTheme} />
    </div>
  )
}