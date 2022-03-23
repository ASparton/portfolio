import PropTypes from 'prop-types';

// react dependencies
import { useState, useEffect } from 'react'

// subcomponents
import Logo from '/components/layout/header/Logo.js';
import NavLink from '/components/layout/header/NavLink.js';
import ThemeSwitcher from '/components/layout/header/ThemeSwitcher.js';

// styles
import headerStyles from '/styles/components/layout/header.module.css';

function Header({ isWhiteTheme, switchThemeFunction }) {

  // Header classes
  const hideHeaderClass = `${headerStyles.header} ${headerStyles.hideHeader}`;
  const displayHeaderClass = `${headerStyles.header} ${headerStyles.displayHeader}`;
  const defaultHeaderClass = `${headerStyles.header}`;

  const [headerClass, setHeaderClass] = useState(defaultHeaderClass); // To display or hide when srolling

  let lastScrollY = 9999999;
  function updateHeaderPosition() {
    if (scrollY > lastScrollY && headerClass === defaultHeaderClass) {
      setHeaderClass(hideHeaderClass);
    } else if (scrollY < lastScrollY) {
      setHeaderClass(displayHeaderClass);
    }
    lastScrollY = scrollY;
  }

  function updateBurgerMenuPosition() {
    if (headerClass === displayHeaderClass) {
      setHeaderClass(hideHeaderClass);
    } else {
      setHeaderClass(displayHeaderClass);
    }
  }
  
  // Set the event listener once when the component is rendered
  useEffect(() => {
    if (window.innerWidth > 900)
      window.addEventListener('scroll', updateHeaderPosition);
  }, [])

  return (
    <>
      <button onClick={updateBurgerMenuPosition} className={headerStyles.burgerButton}>
        <div className={headerStyles.burgerBar}></div>
        <div className={headerStyles.burgerBar}></div>
        <div className={headerStyles.burgerBar}></div>
      </button>
      <header className={`${headerClass} ${isWhiteTheme ? headerStyles.headerWhite : headerStyles.headerBlack}`}>
        <div className={headerStyles.mainContainer}>

          {/* Logo */}
          <div className={headerStyles.logoContainer}>
            <Logo isWhiteTheme={isWhiteTheme} />
          </div>

          {/* Navigation links */}
          <nav className={headerStyles.navContainer}>
            <ul className={headerStyles.nav}>
              <li className={headerStyles.navLink}><NavLink pageRef="/#about" name="About" isWhiteTheme={isWhiteTheme} /></li>
              <li className={headerStyles.navLink}><NavLink pageRef="/#technos" name="Technologies & Tools" isWhiteTheme={isWhiteTheme} /></li>
              <li className={headerStyles.navLink}><NavLink pageRef="/#projects" name="Projects" isWhiteTheme={isWhiteTheme} /></li>
              <li className={headerStyles.navLink}><NavLink pageRef="/#contact" name="Contact" isWhiteTheme={isWhiteTheme} /></li>
              <li className={headerStyles.navLink}><ThemeSwitcher switchThemeFunction={switchThemeFunction} isWhiteTheme={isWhiteTheme} /></li>
            </ul>
          </nav>

        </div>
      </header>
    </>
    )
}

Header.propTypes = {
    isWhiteTheme: PropTypes.bool.isRequired,
    switchThemeFunction: PropTypes.func.isRequired
};

export default Header;