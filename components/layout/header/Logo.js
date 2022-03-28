import PropTypes from 'prop-types'

// next dependencies
import Link from 'next/link';
import Image from 'next/image';

// images
import blackLogo from '/public/logo/logoBlack.png';
import whiteLogo from '/public/logo/logoWhite.png';

function Logo({ isWhiteTheme }) {
  return (
    <Link href="/">
      <a title="Home">
        <Image src={isWhiteTheme ? blackLogo : whiteLogo} alt="AS Logo" />
      </a>
    </Link>
  )
}

Logo.propTypes = {
    isWhiteTheme: PropTypes.bool.isRequired
};

export default Logo;