import PropTypes from 'prop-types';

// next dependencies
import Link from 'next/link';

// styles
import globalStyles from '/styles/global.module.css';

function NavLink({ pageRef, name, isWhiteTheme }) {
  return (
    <Link href={pageRef}>
      <a title={name + " section"} 
         className={isWhiteTheme ? globalStyles.linkWhite : globalStyles.linkBlack}>
        {name}
      </a>
    </Link>
  )
}

NavLink.propTypes = {
    pageRef: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isWhiteTheme: PropTypes.bool.isRequired
};

export default NavLink;