import { useState } from 'react'

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
import styles from '/styles/layout/global.module.css';

/* Images */
import logoBlack from '/public/images/logo/logoBlack.png'
import logoWhite from '/public/images/logo/logoWhite.png'

export default function Home() {

  const [isWhiteTheme, setIsWhiteTheme] = useState(true);

  function switchTheme() {
    setIsWhiteTheme((prev) => !prev);
  }

  return (
    <div className={isWhiteTheme ? styles.bodyWhite : styles.bodyBlack}>
      <Head>
        <title>Alexandre Sparton</title>
        <link rel="icon" href="/images/logo/logoBlack.png" />
      </Head>

      <div className={styles.pageLoad}>
        <div className={styles.pageLoadLogo}>
          <Image src={isWhiteTheme ? logoWhite : logoBlack} alt="Logo Alexandre Sparton"/>
        </div>
      </div>
      <Header isWhiteTheme={isWhiteTheme} switchThemeFunction={switchTheme} />
      <About isWhiteTheme={isWhiteTheme} />
      <Technos isWhiteTheme={isWhiteTheme} />
      <Projects isWhiteTheme={isWhiteTheme} />
      <Contact isWhiteTheme={isWhiteTheme} />
      <Footer isWhiteTheme={isWhiteTheme} />
    </div>
  )
}