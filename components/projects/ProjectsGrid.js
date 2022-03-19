import PropTypes from 'prop-types';
import { useState } from 'react';

import Image from 'next/image'

// subcomponents
import ProjectCard from './ProjectCard.js';

// styles
import pgStyles from '/styles/components/projects/projectGrid.module.css';

// images
import rightArrowBlack from '/public/images/icons/rightArrowBlack.png';
import rightArrowWhite from '/public/images/icons/rightArrowWhite.png';
import leftArrowBlack from '/public/images/icons/leftArrowBlack.png';
import leftArrowWhite from '/public/images/icons/leftArrowWhite.png';

function ProjectsGrid({projectCards, isWhiteTheme }) {

  const [projectIndexStart, setProjectIndexStart] = useState(0);

  function onPreviousProjectClick(event) {
    event.preventDefault();
    event.stopPropagation();

    if (projectIndexStart - 1 > -1)
      setProjectIndexStart(projectIndexStart - 1)
  }

  function onNextProjectClick(event) {
    event.preventDefault();
    event.stopPropagation();
    
    if (projectIndexStart + 1 < projectCards.length - 2)
      setProjectIndexStart(projectIndexStart + 1);
  }

  return (
    <div className={pgStyles.gridContainer}>
      <button className={pgStyles.arrowLeft} title="Previous project" onClick={onPreviousProjectClick}>
        <Image src={isWhiteTheme ? leftArrowBlack : leftArrowWhite} alt="Left arrow" />
      </button>
      <div className={pgStyles.grid}>
        {
          projectCards.slice(projectIndexStart, projectIndexStart + 3).map((projectCard) => (
            <ProjectCard key={projectCard.id} projectCard={projectCard} isWhiteTheme={isWhiteTheme} />
          ))
        }
      </div>
      <button className={pgStyles.arrowRight} title="Next project" onClick={onNextProjectClick}>
        <Image src={isWhiteTheme ? rightArrowBlack : rightArrowWhite} alt="Right arrow" />
      </button>
    </div>
  )
}

ProjectsGrid.propTypes = {
    projectsCard: PropTypes.arrayOf(PropTypes.object).isRequired,
    isWhiteTheme: PropTypes.bool.isRequired
}

export default ProjectsGrid;