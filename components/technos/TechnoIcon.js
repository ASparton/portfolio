import PropTypes from 'prop-types';

// next dependencies
import Image from 'next/image';

// styles
import technosStyles from '/styles/components/technos.module.css';

function TechnoIcon({ image, name, websiteLink }) {
  return (
    <a className={technosStyles.icon} href={websiteLink} title={name + " website"} target="_blank" rel="noopener noreferrer">
      <Image src={image} alt={name + " logo"} />
    </a>
  )
}

TechnoIcon.propTypes = {
    image: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    websiteLink: PropTypes.string.isRequired
};

export default TechnoIcon;