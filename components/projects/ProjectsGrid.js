import PropTypes from 'prop-types';

// react dependencies
import { useState } from 'react';

// next dependencies
import Image from 'next/image'

// subcomponents
import ProjectCard from '/components/projects/ProjectCard.js';

// images
import rightArrowBlack from '/public/images/icons/rightArrowBlack.png';
import rightArrowWhite from '/public/images/icons/rightArrowWhite.png';
import leftArrowBlack from '/public/images/icons/leftArrowBlack.png';
import leftArrowWhite from '/public/images/icons/leftArrowWhite.png';

// styles
import pgStyles from '/styles/components/projects/projectGrid.module.css';

function ProjectsGrid({projectCards, isWhiteTheme }) {

  // To shift by 1 the projects list to the right or to the left
  const [projectIndexStart, setProjectIndexStart] = useState(0);

  /**
   * Try to shift by 1 the projects list to the left
   */
  function onPreviousProjectClick() {
    if (projectIndexStart - 1 > -1)
      setProjectIndexStart(projectIndexStart - 1)
  }

  /**
   * Try to shift by 1 the projects list to the right
   */
  function onNextProjectClick() {
    if (projectIndexStart + 1 < projectCards.length - 2)
      setProjectIndexStart(projectIndexStart + 1);
  }

  return (
    <div className={pgStyles.gridContainer}>

      {/* Previous project button */}
      <button className={pgStyles.arrowLeft} title="Previous project" onClick={onPreviousProjectClick}>
        <Image src={isWhiteTheme ? leftArrowBlack : leftArrowWhite} alt="Left arrow" />
      </button>

      {/* Project cards list */}
      <div className={pgStyles.grid}>
        {projectCards.slice(projectIndexStart, projectIndexStart + 3).map((projectCard) => (
            <ProjectCard key={projectCard.id} projectCard={projectCard} isWhiteTheme={isWhiteTheme} />
          ))}
      </div>

      {/* Next project button */}
      <button className={pgStyles.arrowRight} title="Next project" onClick={onNextProjectClick}>
        <Image src={isWhiteTheme ? rightArrowBlack : rightArrowWhite} alt="Right arrow" />
      </button>

    </div>
  )
}

ProjectsGrid.propTypes = {
    projectCards: PropTypes.arrayOf(PropTypes.object).isRequired,
    isWhiteTheme: PropTypes.bool.isRequired
};

export default ProjectsGrid;