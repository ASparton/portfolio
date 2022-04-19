import PropTypes from 'prop-types';

// next dependencies
import Link from 'next/link';
import Image from 'next/image';

// styles
import cardStyles from '/styles/components/projects/projectCard.module.css';
import globalStyles from '/styles/global.module.css';

// images
import githubBlackIcon from '/public/icons/github-black.png';
import githubWhiteIcon from '/public/icons/github-white.png';

function ProjectCard({ projectCard, isWhiteTheme }) {

  /**
   * Create a new string equal to given sting but sliced from character 0 to character limit with a '...' added at the end.
   * @param {string} text the text to crop
   * @param {int} limit the characters limit
   * @returns a new string equal to given sting but sliced from character 0 to character limit with a '...' added at the end.
   */
  function getCropedText(text, limit) {
    return text.slice(0, limit) + '...';
  }

  let skillKey = 0;

  return (
    <article className={cardStyles.card}>

      {/* Project year & category */}
      <div className={cardStyles.catAndYearContainer}>
        <p className={isWhiteTheme ? cardStyles.tagWhite : cardStyles.tagBlack}>{projectCard.category}</p>
        <p className={`${isWhiteTheme ? globalStyles.textWhite : globalStyles.textBlack} ${cardStyles.year}`}><b><i>{projectCard.year}</i></b></p>
      </div>

      {/* Project image cover */}
      <div className={cardStyles.cover} title={projectCard.title + " project"}>
        <Link href={"/projects/" + projectCard.id} passHref>
          <img src={projectCard.cover_url} alt={projectCard.title + " cover"} className={cardStyles.coverImage} />
        </Link>
      </div>

      {/* Project skills */}
      <ul className={cardStyles.skillsContainer}>
        {projectCard.skills.map((projectSkill) =>
          <li key={skillKey++} className={isWhiteTheme ? cardStyles.skillWhite : cardStyles.skillBlack}>
            <p>{projectSkill}</p>
          </li>
        )}
      </ul>

      {/* Project title */}
      <div title={projectCard.title + " project"}>
        <Link href={"/projects/" + projectCard.id} passHref>
          <h3 className={`${cardStyles.title} ${isWhiteTheme ? globalStyles.linkBlack : globalStyles.linkWhite}`}>{projectCard.title}</h3>
        </Link>
      </div>

      {/* Project description */}
      <p className={`${cardStyles.description} ${isWhiteTheme ? globalStyles.textWhite : globalStyles.textBlack}`}>
        {getCropedText(projectCard.description, 300)}
      </p>

      {/* See more button & repository link */}
      <div className={cardStyles.seeMoreGitContainer}>
        <div title={projectCard.title + " project"} className={isWhiteTheme ? cardStyles.seeMoreWhite : cardStyles.seeMoreBlack}>
          <Link href={"/projects/" + projectCard.id} passHref><p>See more</p></Link>
        </div>
        <a href={projectCard.repo_url} title={projectCard.title + " github repository"} target="_blank" rel="noopener noreferrer" 
           className={cardStyles.git}>
          <Image src={isWhiteTheme ? githubWhiteIcon : githubBlackIcon} alt="Github icon" className={cardStyles.gitIcon} />
        </a>
      </div>

    </article>
  )
}

ProjectCard.propTypes = {
    projectCard: PropTypes.object.isRequired,
    isWhiteTheme: PropTypes.bool.isRequired
};

export default ProjectCard;