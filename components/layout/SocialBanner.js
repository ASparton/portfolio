import PropTypes from 'prop-types';
import Image from 'next/image';

// icons
import githubWhiteIcon from '/public/images/icons/github-white-icon.png';
import linkedinWhiteIcon from '/public/images/icons/linkedin-white-icon.png';
import emailWhiteIcon from '/public/images/icons/email-white-icon.png';
import githubBlackIcon from '/public/images/icons/github-black-icon.png';
import linkedinBlackIcon from '/public/images/icons/linkedin-black-icon.png';
import emailBlackIcon from '/public/images/icons/email-black-icon.png';

function SocialBanner({isWhiteTheme}) {
  return (
    <div>
        <ul>
            <li>
                <a href="https://github.com/ASparton/" title="GitHub Profile" target="_blank" rel="noopener noreferrer">
                    <Image src={isWhiteTheme ? githubWhiteIcon : githubBlackIcon} alt="GitHub icon"/>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/alexandre-sparton/" title="LinkedIn Profile" target="_blank" rel="noopener noreferrer">
                    <Image src={isWhiteTheme ? linkedinWhiteIcon : linkedinBlackIcon} alt="LinkedIn icon"/>
                </a>
            </li>
            <li>
                <a href="mailto:sparton.alexandre@gmail.com?subject=From Portfolio" title="Email address" target="_blank" rel="noopener noreferrer">
                    <Image src={isWhiteTheme ? emailWhiteIcon : emailBlackIcon} alt="Email icon"/>
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