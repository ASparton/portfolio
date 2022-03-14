import PropTypes from 'prop-types';
import Image from 'next/image';

// icons
import githubWhiteIcon from '/public/images/icons/github-white.png';
import linkedinWhiteIcon from '/public/images/icons/linkedin-white.png';
import githubBlackIcon from '/public/images/icons/github-black.png';
import linkedinBlackIcon from '/public/images/icons/linkedin-black.png';

// styles
import styles from '/styles/layout/socialBanner.module.css'

function SocialBanner({isWhiteTheme}) {
  return (
    <div>
        <ul className={styles.bannerContainer}>
            <li className={styles.bannerIcon}>
                <a href="https://www.linkedin.com/in/alexandre-sparton/" title="LinkedIn Profile" target="_blank" rel="noopener noreferrer">
                    <Image src={isWhiteTheme ? linkedinBlackIcon : linkedinWhiteIcon} alt="LinkedIn icon"/>
                </a>
            </li>
            <li className={styles.bannerIcon}>
                <a href="https://github.com/ASparton/" title="GitHub Profile" target="_blank" rel="noopener noreferrer">
                    <Image src={isWhiteTheme ? githubBlackIcon : githubWhiteIcon} alt="GitHub icon"/>
                </a>
            </li>
        </ul>
    </div>
  )
}

SocialBanner.propTypes = {
    isWhiteTheme: PropTypes.bool.isRequired
};

export default SocialBanner;