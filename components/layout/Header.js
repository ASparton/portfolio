import PropTypes from 'prop-types';
import { useState, useEffect } from 'react'

import Link from 'next/link';
import Image from 'next/image';

import blackLogo from '/public/images/logo/LogoBlack.png';
import whiteLogo from '/public/images/logo/LogoWhite.png';
import themeSwitcherBlack from '/public/images/icons/color-adjust-black.png';
import themeSwitcherWhite from '/public/images/icons/color-adjust-white.png';

import headerStyles from '/styles/layout/header.module.css';
import globalStyles from '/styles/layout/global.module.css';

function Header({ isWhiteTheme, switchThemeFunction }) {

  let hideHeaderClass = `${headerStyles.header} ${headerStyles.hideHeader}`;
  let displayHeaderClass = `${headerStyles.header} ${headerStyles.displayHeader}`;
  let defaultHeaderClass = `${headerStyles.header}`;

  const [headerClass, setHeaderClass] = useState(defaultHeaderClass);

  let lastScrollY = 9999999;
  function updateHeaderPosition() {
    if (scrollY > lastScrollY && headerClass === defaultHeaderClass) {
      setHeaderClass(hideHeaderClass);
    } else if (scrollY < lastScrollY) {
      setHeaderClass(displayHeaderClass);
    }
    lastScrollY = scrollY;
  }
  
  // Set the event listener once when the component is rendered
  useEffect(() => {
    window.addEventListener('scroll', updateHeaderPosition);
  }, [])

  return (
      <header className={`${headerClass} ${isWhiteTheme ? headerStyles.headerWhite : headerStyles.headerBlack}`}>
        <div className={headerStyles.mainContainer}>
          <div className={headerStyles.logoContainer}>
            <Link href="/">
              <a title="Home">
                <Image src={isWhiteTheme ? blackLogo : whiteLogo} alt="AS Logo" />
              </a>
            </Link>
          </div>
          <nav className={headerStyles.navContainer}>
            <ul className={headerStyles.nav}>
              <li className={headerStyles.navElement}>
                <Link href="/#about">
                  <a title="About section" 
                     className={`${globalStyles.Link} ${isWhiteTheme ? globalStyles.LinkWhite : globalStyles.LinkBlack}`}>
                    About
                  </a>
                </Link>
              </li>
              <li className={headerStyles.navElement}>
                <Link href="/#technos">
                    <a title="Technologies && Tools section" 
                       className={`${globalStyles.Link} ${isWhiteTheme ? globalStyles.LinkWhite : globalStyles.LinkBlack}`}>
                      Technologies & Tools
                    </a>
                </Link>
              </li>
              <li className={headerStyles.navElement}>
                <Link href="/">
                    <a title="Projects section" 
                       className={`${globalStyles.Link} ${isWhiteTheme ? globalStyles.LinkWhite : globalStyles.LinkBlack}`}>
                      Projects
                    </a>
                </Link>
              </li>
              <li className={headerStyles.navElement}>
                <Link href="/#contact">
                    <a title="Contact section" 
                       className={`${globalStyles.Link} ${isWhiteTheme ? globalStyles.LinkWhite : globalStyles.LinkBlack}`}>
                      Contact
                    </a>
                </Link>
              </li>
              <li className={headerStyles.navElement}>
                <div className={headerStyles.themeSwitcher}>
                  <Image src={isWhiteTheme ? themeSwitcherBlack : themeSwitcherWhite} alt="Theme switcher icon" title="Theme switcher" 
                         onClick={switchThemeFunction}/>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
}

Header.propTypes = {
    isWhiteTheme: PropTypes.bool.isRequired,
    switchThemeFunction: PropTypes.func.isRequired
};

export default Header;