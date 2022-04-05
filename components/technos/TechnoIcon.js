import PropTypes from 'prop-types';

// styles
import technosStyles from '/styles/components/technos.module.css';

function TechnoIcon({ techno }) {
  return (
    <a className={technosStyles.icon}
       href={techno.website_url}
       title={techno.name + " website"}
       target="_blank"
       rel="noopener noreferrer">
      <img className={technosStyles.iconImage} src={techno.icon_url} alt={techno.name + " logo"} />
    </a>
  )
}

TechnoIcon.propTypes = {
    techno: PropTypes.object.isRequired
};

export default TechnoIcon;