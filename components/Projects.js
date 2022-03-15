import PropTypes from 'prop-types';

// subcomponents
import TagsBar from '/components/projects/TagsBar.js';
import ProjectsGrid from '/components/projects/ProjectsGrid.js';

// styles
import projectsStyles from '/styles/components/projects.module.css';
import globalStyles from '/styles/layout/global.module.css';

let dummyCategories = [
    {
        id: 0,
        name: 'Game programming'
    },
    {
        id: 1,
        name: 'Web application'
    },
    {
        id: 2,
        name: 'Graphics programming'
    }
];

let dummySkills = [
    {
        id: 0,
        name: 'Javascript'
    },
    {
        id: 1,
        name: 'C++'
    },
    {
        id: 2,
        name: 'Docker'
    }
];

function Projects({ isWhiteTheme }) {
  return (
    <section>
        <div className={projectsStyles.mainContainer} >
            <h2 className={`${projectsStyles.title} ${isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}`}>
                Some projects I have worked on
            </h2>
            <div>
                <div>
                    <TagsBar title="Categories" tags={dummyCategories} isWhiteTheme={isWhiteTheme} />
                    <TagsBar title="Skills" tags={dummySkills} isWhiteTheme={isWhiteTheme} />
                </div>
                <ProjectsGrid isWhiteTheme={isWhiteTheme} />
            </div>
        </div>
    </section>
  )
}

Projects.propTypes = {
    isWhiteTheme: PropTypes.bool.isRequired
}

export default Projects;