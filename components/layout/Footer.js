import PropTypes from 'prop-types';

// Components
import SocialBanner from '/components/layout/SocialBanner.js';

// Styles
import footerStyles from '/styles/layout/footer.module.css';
import templatesStyles from '/styles/templates.module.css';

function Footer({ isWhiteTheme }) {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.repoLink}>
        <a href="https://github.com/ASparton/Portfolio" title="Portfolio repository" target="_blank" rel="noopener noreferrer">
          <h4 className={`${templatesStyles.Link} ${isWhiteTheme ? templatesStyles.LinkWhite : templatesStyles.LinkBlack}`}>
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
}

export default Footer;