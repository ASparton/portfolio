import PropTypes from 'prop-types';

// react dependencies
import { useState, useEffect } from 'react'

// subcomponents
import BurgerButton from '/components/layout/header/BurgerButton.js';
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

  const [headerClass, setHeaderClass] = useState(defaultHeaderClass); // To display or hide when scrolling in desktop mode

  let lastScrollY = 9999999;
  /**
   * Hide the header when scrolling down, and display it when scrolling up.
   */
  function updateHeaderPosition() {
    if (window.innerWidth <= 1000)
      return;

    if (scrollY > lastScrollY && headerClass === defaultHeaderClass)
      setHeaderClass(hideHeaderClass);
    else if (scrollY < lastScrollY)
      setHeaderClass(displayHeaderClass);

    lastScrollY = scrollY;
  }

  /**
   * Hide or display the burger menu on click.
   */
  function updateBurgerMenuPosition() {
    if (headerClass === displayHeaderClass)
      setHeaderClass(hideHeaderClass);
    else
      setHeaderClass(displayHeaderClass);
  }
  
  // Set the event listener once when the component is rendered
  useEffect(() => {
    window.addEventListener('scroll', updateHeaderPosition);

    if (window.innerWidth <= 1000)
      setHeaderClass(hideHeaderClass);
  }, [])

  return (
    <>
      <BurgerButton updateBurgerMenuPosition={updateBurgerMenuPosition}
                    isClicked={headerClass === displayHeaderClass ? true : false}
                    isWhiteTheme={isWhiteTheme} />
      
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