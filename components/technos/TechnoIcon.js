import PropTypes from 'prop-types';

// styles
import technosStyles from '/styles/components/technos.module.css';

function TechnoIcon({ techno }) {
  return (
    <a className={technosStyles.icon} 
       href={techno.link}
       title={techno.name + " website"}
       target="_blank"
       rel="noopener noreferrer">
      <img src={techno.iconLink} alt={techno.name + " logo"} />
    </a>
  )
}

TechnoIcon.propTypes = {
    techno: PropTypes.object.isRequired
};

export default TechnoIcon;