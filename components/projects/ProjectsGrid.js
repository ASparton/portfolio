import PropTypes from 'prop-types';

// react dependencies
import { useState, useEffect } from 'react';

// next dependencies
import Image from 'next/image'

// subcomponents
import ProjectCard from '/components/projects/ProjectCard.js';

// images
import rightArrowBlack from '/public/icons/rightArrowBlack.png';
import rightArrowWhite from '/public/icons/rightArrowWhite.png';
import leftArrowBlack from '/public/icons/leftArrowBlack.png';
import leftArrowWhite from '/public/icons/leftArrowWhite.png';

// styles
import pgStyles from '/styles/components/projects/projectGrid.module.css';

function ProjectsGrid({projectCards, isWhiteTheme, inSection }) {

  // To shift by 1 the projects list to the right or to the left
  const [projectIndexStart, setProjectIndexStart] = useState(0);
  const [projectIndexEnd, setProjectIndexEnd] = useState(3);

  /**
   * Try to shift by 1 the projects list to the left
   */
  function onPreviousProjectClick() {
    if (projectIndexStart - 1 > -1) {
      setProjectIndexStart(projectIndexStart - 1)
    }
  }

  /**
   * Try to shift by 1 the projects list to the right
   */
  function onNextProjectClick() {
    if (projectIndexStart + 1 < projectCards.length - projectIndexEnd + 1) {
      setProjectIndexStart(projectIndexStart + 1);
    }
  }

  /**
   * Determine the number of projects to display depending on the window's width
   */
  function onWindowResize() {
    if (window.innerWidth < 700)
      setProjectIndexEnd(1);
    else if (window.innerWidth < 1200)
      setProjectIndexEnd(2);
    else
      setProjectIndexEnd(3);
  }

  useEffect(() => {
    if (inSection) {
      window.addEventListener('resize', onWindowResize);
      onWindowResize();
    }
  }, []);

  return (
    <div className={pgStyles.gridContainer}>

      {/* Previous project button */}
      { inSection && 
        <button className={pgStyles.arrowLeft} title="Previous project" onClick={onPreviousProjectClick}>
          <Image src={isWhiteTheme ? leftArrowBlack : leftArrowWhite} alt="Left arrow" />
        </button>
      }

      {/* Project cards list */}
      <div className={inSection ? pgStyles.gridSection : pgStyles.grid}>
        {inSection ? 
          projectCards.slice(projectIndexStart, projectIndexStart + projectIndexEnd).map((projectCard) => (
            <ProjectCard key={projectCard.id} projectCard={projectCard} isWhiteTheme={isWhiteTheme} inSection={true} />
          )) :
          projectCards.map((projectCard) => (
            <ProjectCard key={projectCard.id} projectCard={projectCard} isWhiteTheme={isWhiteTheme} inSection={false} />
          ))
        }
      </div>

      {/* Next project button */}
      { inSection &&
        <button className={pgStyles.arrowRight} title="Next project" onClick={onNextProjectClick}>
          <Image src={isWhiteTheme ? rightArrowBlack : rightArrowWhite} alt="Right arrow" />
        </button>
      }

    </div>
  )
}

ProjectsGrid.propTypes = {
    projectCards: PropTypes.arrayOf(PropTypes.object).isRequired,
    isWhiteTheme: PropTypes.bool.isRequired,
    inSection: PropTypes.bool.isRequired
};

export default ProjectsGrid;