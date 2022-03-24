import PropTypes from 'prop-types';

// next dependencies
import Link from 'next/link';

// styles
import cardStyles from '/styles/components/projects/projectCard.module.css';
import globalStyles from '/styles/global.module.css';

function ProjectCard({ projectCard, isWhiteTheme, inSection }) {

  let skillKey = 0;

  return (
    <article className={`${isWhiteTheme ? cardStyles.cardBlack : cardStyles.cardWhite} ${!inSection && cardStyles.cardNoSection}`}>

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
      <div className={cardStyles.cover} title={projectCard.title + " project"}>
        <Link href={"/projects/" + projectCard.id}>
          <img src={projectCard.imageUrl} alt={projectCard.title + " cover"} className={cardStyles.coverImage} />
        </Link>
      </div>

      {/* Project title */}
      <div title={projectCard.title + " project"}>
        <Link href={"/projects/" + projectCard.id}>
          <h3 className={`${cardStyles.title} ${isWhiteTheme ? globalStyles.linkBlack : globalStyles.linkWhite}`}>{projectCard.title}</h3>
        </Link>
      </div>

      {/* Project description */}
      <p className={`${cardStyles.description} ${isWhiteTheme ? globalStyles.textWhite : globalStyles.textBlack}`}>{projectCard.description}</p>

      {/* See more button */}
      <div title={projectCard.title + " project"} className={isWhiteTheme ? cardStyles.seeMoreWhite : cardStyles.seeMoreBlack}>
        <Link href={"/projects/" + projectCard.id}><p>See more</p></Link>
      </div>

    </article>
  )
}

ProjectCard.propTypes = {
    projectCard: PropTypes.object.isRequired,
    isWhiteTheme: PropTypes.bool.isRequired,
    inSection: PropTypes.bool.isRequired
};

export default ProjectCard;