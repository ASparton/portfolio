import PropTypes from 'prop-types';

import Link from 'next/link';
import Image from 'next/image';

import blackLogo from '/public/images/logo/LogoBlack.png';
import whiteLogo from '/public/images/logo/LogoWhite.png';
import themeSwitcherBlack from '/public/images/icons/color-adjust-black.png';
import themeSwitcherWhite from '/public/images/icons/color-adjust-white.png';

import styles from '/styles/layout/header.module.css';

function Header({ isWhiteTheme }) {

  return (
      <header className={styles.header}>
        <div className={styles.mainContainer}>
          <div className={styles.logoContainer}>
            <Link href="/">
              <a title="Home">
                <Image src={isWhiteTheme ? blackLogo : whiteLogo} alt="AS Logo" />
              </a>
            </Link>
          </div>
          <nav className={styles.navContainer}>
            <ul className={styles.nav}>
              <li className={styles.navElement}>
                <Link href="/#about">
                  <a title="About section" className={styles.navLink}>About</a>
                </Link>
              </li>
              <li className={styles.navElement}>
                <Link href="/#technos">
                    <a title="Technologies && Tools section" className={styles.navLink}>Technologies & Tools</a>
                </Link>
              </li>
              <li className={styles.navElement}>
                <Link href="/">
                    <a title="Projects section" className={styles.navLink}>Projects</a>
                </Link>
              </li>
              <li className={styles.navElement}>
                <Link href="/#contact">
                    <a title="Contact section" className={styles.navLink}>Contact</a>
                </Link>
              </li>
              <li className={styles.navElement}>
                <div className={styles.themeSwitcher}>
                  <Link href="/">
                    <a title="Switch theme" className={styles.navLink}>
                      <Image src={isWhiteTheme ? themeSwitcherBlack : themeSwitcherWhite} alt="Theme switcher icon" />
                    </a>
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
}

Header.propTypes = {
    isWhiteTheme: PropTypes.bool.isRequired
};

export default Header;