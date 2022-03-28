import PropTypes from 'prop-types';
import Image from 'next/image';

// images
import githubWhiteIcon from '/public/icons/github-white.png';
import linkedinWhiteIcon from '/public/icons/linkedin-white.png';
import githubBlackIcon from '/public/icons/github-black.png';
import linkedinBlackIcon from '/public/icons/linkedin-black.png';

// styles
import socialBannerStyles from '/styles/components/layout/socialBanner.module.css'

function SocialBanner({isWhiteTheme}) {
  return (
    <div>
        <ul className={socialBannerStyles.bannerContainer}>

            {/* LinkedIn */}
            <li className={socialBannerStyles.bannerIcon}>
                <a href="https://www.linkedin.com/in/alexandre-sparton/" title="LinkedIn Profile" target="_blank" rel="noopener noreferrer">
                    <Image src={isWhiteTheme ? linkedinBlackIcon : linkedinWhiteIcon} alt="LinkedIn icon"/>
                </a>
            </li>

            {/* Github */}
            <li className={socialBannerStyles.bannerIcon}>
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