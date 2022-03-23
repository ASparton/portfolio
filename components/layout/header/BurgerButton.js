import PropTypes from 'prop-types';

// react dependencies
import { useState } from 'react';

// styles
import burgerBtnStyles from '/styles/components/layout/header/burgerButton.module.css';

function BurgerButton({ updateBurgerMenuPosition, isWhiteTheme }) {

  const [isClicked, setIsClicked] = useState(false);

  return (
    <button onClick={() => {updateBurgerMenuPosition(); setIsClicked((prev) => !prev)}} className={burgerBtnStyles.burgerButton}>
      <div className={`${isWhiteTheme ? burgerBtnStyles.burgerBarBlack : burgerBtnStyles.burgerBarWhite}
                       ${isClicked ? burgerBtnStyles.crossDown : burgerBtnStyles.uncrossDown}`}></div>
      <div className={`${isWhiteTheme ? burgerBtnStyles.burgerBarBlack : burgerBtnStyles.burgerBarWhite}
                       ${isClicked ? burgerBtnStyles.fadeOut : burgerBtnStyles.fadeIn}`}></div>
      <div className={`${isWhiteTheme ? burgerBtnStyles.burgerBarBlack : burgerBtnStyles.burgerBarWhite}
                       ${isClicked ? burgerBtnStyles.crossUp : burgerBtnStyles.uncrossUp}`}></div>
    </button>
  )
}

BurgerButton.propTypes = {
    updateBurgerMenuPosition: PropTypes.func.isRequired,
    isWhiteTheme: PropTypes.bool.isRequired
};

export default BurgerButton;