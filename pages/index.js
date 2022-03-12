import Head from 'next/head';

/* Components */
// Layout
import Header from '/components/layout/Header.js';
import Footer from '/components/layout/Footer.js';
import SocialBanner from '/components/layout/SocialBanner.js';
// Sections
import About from '/components/About.js';
import Technos from '/components/Technos.js';
import Contact from '/components/Contact.js';

export default function Home() {
  return (
    <>
      <Head>
        <title>Alexandre Sparton</title>
        <link rel="icon" href="/images/logo/LogoBlack.png" />
      </Head>

      <Header isWhiteTheme={true} />
      <SocialBanner isWhiteTheme={true} />
      <About />
      <Technos />
      <Contact />
      <Footer />
    </>
  )
}