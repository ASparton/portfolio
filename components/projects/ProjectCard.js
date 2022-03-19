import PropTypes from 'prop-types';

// styles
import cardStyles from '/styles/components/projects/projectCard.module.css';
import globalStyles from '/styles/layout/global.module.css';

function ProjectCard({ projectCard, isWhiteTheme }) {

  let skillKey = 0;

  return (
    <article className={isWhiteTheme ? cardStyles.cardBlack : cardStyles.cardWhite}>
      <p className={isWhiteTheme ? cardStyles.tagWhite : cardStyles.tagBlack}>{projectCard.category}</p>
      <ul className={cardStyles.skillsContainer}>
        {projectCard.skills.map((projectSkill) =>
          <li key={skillKey++} className={isWhiteTheme ? cardStyles.skillWhite : cardStyles.skillBlack}>
            <p>{projectSkill}</p>
          </li>
        )}
      </ul>
      <a href="/" title={projectCard.title} className={cardStyles.cover}>
        <img src={projectCard.imageUrl} alt={projectCard.title + " cover"} className={cardStyles.coverImage} />
      </a>
      <a href="/" title={projectCard.title}>
        <h3 className={`${cardStyles.title} ${isWhiteTheme ? globalStyles.linkBlack : globalStyles.linkWhite}`}>{projectCard.title}</h3>
      </a>
      <p className={`${cardStyles.description} ${isWhiteTheme ? globalStyles.textWhite : globalStyles.textBlack}`}>{projectCard.description}</p>
      <a href="/" title={projectCard.title} className={isWhiteTheme ? cardStyles.seeMoreWhite : cardStyles.seeMoreBlack}>
        See more
      </a>
    </article>
  )
}

ProjectCard.propTypes = {
    projectCard: PropTypes.object.isRequired,
    isWhiteTheme: PropTypes.bool.isRequired
}

export default ProjectCard;