import PropTypes from 'prop-types';

// styles
import contactHeaderStyles from '/styles/components/contact/contactHeader.module.css';
import globalStyles from '/styles/global.module.css';

function ContactHeader({ isWhiteTheme }) {
  return (
    <div className={contactHeaderStyles.mainContainer}>
      {/* Title */}
      <h1 className={`${contactHeaderStyles.title} ${isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}`}>Contact</h1>
      <h3 className={isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}>Want to propose or tell me something ?</h3>

      {/* Shoot me an email */}
      <p className={isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}>Use this form or shoot me an email directly on:</p>
      <a href="mailto:sparton.alexandre@gmail.com?subject=From Portfolio" title="Email address" target="_blank" rel="noopener noreferrer"
        className={isWhiteTheme ? globalStyles.linkWhite : globalStyles.linkBlack}>
          <h4 className={isWhiteTheme ? globalStyles.linkWhite : globalStyles.linkBlack}>
            sparton.alexandre@gmail.com
          </h4>
      </a>

    </div>
  )
}

ContactHeader.propTypes = {
    isWhiteTheme: PropTypes.bool.isRequired
};

export default ContactHeader;