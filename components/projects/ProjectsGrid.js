import PropTypes from 'prop-types';
import { useState } from 'react'

import Image from 'next/image';

// subcomponents
import ProjectCard from './ProjectCard.js';

// styles
import pgStyles from '/styles/components/projects/projectGrid.module.css';

// images
import plusBlack from '/public/images/icons/plusBlack.png'
import plusWhite from '/public/images/icons/plusWhite.png'

function ProjectsGrid({projectsCard, isWhiteTheme }) {
  return (
    <div className={pgStyles.gridContainer}>
      <div className={pgStyles.grid}>
        {projectsCard.map((projectCard) => (
          <ProjectCard key={projectCard.id} projectCard={projectCard} isWhiteTheme={isWhiteTheme} />
        ))}
      </div>
      <button title="Show more projects"
              className={pgStyles.moreProjectsButton}>
        <Image src={isWhiteTheme ? plusBlack : plusWhite} alt="Plus icon"/>
      </button>
    </div>
  )
}

ProjectsGrid.propTypes = {
    projectsCard: PropTypes.arrayOf(PropTypes.object).isRequired,
    isWhiteTheme: PropTypes.bool.isRequired
}

export default ProjectsGrid;