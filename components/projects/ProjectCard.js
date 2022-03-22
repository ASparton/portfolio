import PropTypes from 'prop-types';

// styles
import cardStyles from '/styles/components/projects/projectCard.module.css';
import globalStyles from '/styles/global.module.css';

function ProjectCard({ projectCard, isWhiteTheme }) {

  let skillKey = 0;

  return (
    <article className={`${isWhiteTheme ? cardStyles.cardBlack : cardStyles.cardWhite}`}>

      {/* Project category */}
      <p className={isWhiteTheme ? cardStyles.tagWhite : cardStyles.tagBlack}>{projectCard.category}</p>

      {/* Project skills */}
      <ul className={cardStyles.skillsContainer}>
        {projectCard.skills.map((projectSkill) =>
          <li key={skillKey++} className={isWhiteTheme ? cardStyles.skillWhite : cardStyles.skillBlack}>
            <p>{projectSkill}</p>
          </li>
        )}
      </ul>

      {/* Project image cover */}
      <a href="/" title={projectCard.title} className={cardStyles.cover}>
        <img src={projectCard.imageUrl} alt={projectCard.title + " cover"} className={cardStyles.coverImage} />
      </a>

      {/* Project title */}
      <a href="/" title={projectCard.title}>
        <h3 className={`${cardStyles.title} ${isWhiteTheme ? globalStyles.linkBlack : globalStyles.linkWhite}`}>{projectCard.title}</h3>
      </a>

      {/* Project description */}
      <p className={`${cardStyles.description} ${isWhiteTheme ? globalStyles.textWhite : globalStyles.textBlack}`}>{projectCard.description}</p>

      {/* See more button */}
      <a href="/" title={projectCard.title} className={isWhiteTheme ? cardStyles.seeMoreWhite : cardStyles.seeMoreBlack}>
        See more
      </a>

    </article>
  )
}

ProjectCard.propTypes = {
    projectCard: PropTypes.object.isRequired,
    isWhiteTheme: PropTypes.bool.isRequired
};

export default ProjectCard;