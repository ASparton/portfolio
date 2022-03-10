import PropTypes from 'prop-types';
import Image from 'next/image';

// icons
import githubIcon from '/public/images/icons/github-icon.png';

function SocialBanner({isWhiteTheme}) {
  return (
    <div>
        <ul>
            <li>
                <a href="https://github.com/ASparton/" title="GitHub Profile" target="_blank" rel="noopener noreferrer">
                    <Image src={githubIcon} alt="GitHub icon"/>
                </a>
            </li>
            <li>
                <a href="https://github.com/ASparton/" title="GitHub Profile" target="_blank" rel="noopener noreferrer">
                    <Image src={githubIcon} alt="GitHub icon"/>
                </a>
            </li>
            <li>
                <a href="https://github.com/ASparton/" title="GitHub Profile" target="_blank" rel="noopener noreferrer">
                    <Image src={githubIcon} alt="GitHub icon"/>
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