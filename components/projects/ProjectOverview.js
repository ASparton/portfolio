import PropTypes from 'prop-types';

// styles
import pHeaderStyles from '/styles/components/projects/projectOverview.module.css';
import globalStyles from '/styles/global.module.css';

function ProjectOverview({ projectHeader, isWhiteTheme }) {

  let skillKey = 0;

  return (
      <section name="overview" className={pHeaderStyles.mainContainer}>

      {/* Project title */}
      <h1 className={`${pHeaderStyles.title} ${isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}`}>
          {projectHeader.title}
      </h1>
  
      {/* Project year & category */}
      <div className={pHeaderStyles.catAndYearContainer}>
        <p className={isWhiteTheme ? pHeaderStyles.tagBlack : pHeaderStyles.tagWhite}>{projectHeader.category}</p>
        <p className={`${pHeaderStyles.year} ${isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}`}>
          <b>Built in <i>{projectHeader.year}</i></b>
        </p>
      </div>
  
      {/* Cover image */}
      <div className={pHeaderStyles.coverImageContainer} title={projectHeader.title + " cover image"}>
        <img src={projectHeader.coverUrl} alt={projectHeader.title + " cover image"} className={pHeaderStyles.coverImage} />
      </div>
  
      {/* Skills */}
      <ul className={pHeaderStyles.skillsContainer}>
        {projectHeader.skills.map((projectSkill) =>
          <li key={skillKey++} className={isWhiteTheme ? pHeaderStyles.skillBlack : pHeaderStyles.skillWhite}>
            <p>{projectSkill}</p>
          </li>
        )}
      </ul>
  
      {/* Description */}
      <p className={pHeaderStyles.description}>{projectHeader.description}</p>

    </section>
  )
}

ProjectOverview.propTypes = {
    projectHeader: PropTypes.object.isRequired,
    isWhiteTheme: PropTypes.bool.isRequired
};

export default ProjectOverview;