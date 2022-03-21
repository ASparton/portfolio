import PropTypes from 'prop-types';

// next dependencies
import Image from 'next/image';

// images
import themeSwitcherBlack from '/public/images/icons/color-adjust-black.png';
import themeSwitcherWhite from '/public/images/icons/color-adjust-white.png';

// styles
import themeSwitchStyles from '/styles/components/layout/header/themeSwitch.module.css';

function ThemeSwitcher({ switchThemeFunction, isWhiteTheme }) {
  return (
    <div className={themeSwitchStyles.themeSwitcher}>
      <Image src={isWhiteTheme ? themeSwitcherBlack : themeSwitcherWhite} alt="Theme switcher icon" title="Theme switcher" 
             onClick={switchThemeFunction}/>
    </div>
  )
}

ThemeSwitcher.propTypes = {
    switchThemeFunction: PropTypes.func.isRequired,
    isWhiteTheme: PropTypes.bool.isRequired
};

export default ThemeSwitcher;