import PropTypes from 'prop-types';

// styles
import sectionStyles from '/styles/components/projects/projectSection.module.css';
import globalStyles from '/styles/global.module.css';

function ProjectSection({ sectionName, title, text, isWhiteTheme }) {
  return (
    <section name={sectionName} className={sectionStyles.mainContainer}>
      <h2 className={`${sectionStyles.title} ${isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}`}>{title}</h2>
      <p className={`${sectionStyles.text} ${isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}`}>{text}</p>
    </section>
  )
}

ProjectSection.propTypes = {
  sectionName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isWhiteTheme: PropTypes.bool.isRequired
};

export default ProjectSection;