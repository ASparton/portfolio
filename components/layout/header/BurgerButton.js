import PropTypes from 'prop-types';

// styles
import burgerBtnStyles from '/styles/components/layout/header/burgerButton.module.css';

function BurgerButton({ updateBurgerMenuPosition, isClicked, isWhiteTheme }) {
  return (
    <button onClick={updateBurgerMenuPosition} className={burgerBtnStyles.burgerButton}>
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
    isClicked: PropTypes.bool.isRequired,
    isWhiteTheme: PropTypes.bool.isRequired
};

export default BurgerButton;