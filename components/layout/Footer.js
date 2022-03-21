import PropTypes from 'prop-types';

// subcomponents
import SocialBanner from '/components/layout/SocialBanner.js';

// Styles
import footerStyles from '/styles/components/layout/footer.module.css';
import globalStyles from '/styles/global.module.css';

function Footer({ isWhiteTheme }) {
  return (
    <footer className={footerStyles.footer}>

      {/* Designed by me --> Link to the github repo */}
      <div className={footerStyles.repoLink}>
        <a href="https://github.com/ASparton/Portfolio" title="Portfolio repository" target="_blank" rel="noopener noreferrer">
          <h4 className={isWhiteTheme ? globalStyles.linkWhite : globalStyles.linkBlack}>
            Designed & Built by Alexandre Sparton
          </h4>
        </a>
      </div>

      <SocialBanner isWhiteTheme={isWhiteTheme} />
    </footer>
  )
}

Footer.propTypes = { 
  isWhiteTheme: PropTypes.bool.isRequired
};

export default Footer;