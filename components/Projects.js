import PropTypes from 'prop-types';
import { useState } from 'react'

// subcomponents
import TagsBar from '/components/projects/TagsBar.js';
import ProjectsGrid from '/components/projects/ProjectsGrid.js';

// styles
import projectsStyles from '/styles/components/projects.module.css';
import globalStyles from '/styles/layout/global.module.css';

let dummyCategories = [
    {
        id: 0,
        name: 'Game programming',
        chosen: false
    },
    {
        id: 1,
        name: 'Web application',
        chosen: true
    },
    {
        id: 2,
        name: 'Graphics programming',
        chosen: false
    },
    {
        id: 3,
        name: 'Artificial Intelligence',
        chosen: false
    }
    ,
    {
        id: 4,
        name: 'Virtual Reality',
        chosen: false
    }
    ,
    {
        id: 5,
        name: 'DevOps',
        chosen: true
    }
];

let dummySkills = [
    {
        id: 0,
        name: 'Javascript',
        chosen: true
    },
    {
        id: 1,
        name: 'C++',
        chosen: false
    },
    {
        id: 2,
        name: 'Docker',
        chosen: false
    },
    {
        id: 3,
        name: 'PHP',
        chosen: false
    },
    {
        id: 4,
        name: 'C#',
        chosen: false
    },
    {
        id: 5,
        name: 'Postgresql',
        chosen: true
    },
    {
        id: 6,
        name: 'PHP My Admin',
        chosen: false
    },
    {
        id: 7,
        name: 'Godot',
        chosen: true
    },
    {
        id: 8,
        name: 'Unity',
        chosen: false
    },
    {
        id: 9,
        name: 'Unreal Engine 4',
        chosen: false
    }
];

function Projects({ isWhiteTheme }) {

    const [categories, setCategories] = useState(dummyCategories);
    const [skills, setSkills] = useState(dummySkills);
    
    function updateCategoryFilter(tagId) {
      const newCategories = []; // We create a copy to make the state change and re-render the component properly
      categories.map((category) => {
          newCategories.push(category);
          if (category.id === tagId)
            category.chosen = !category.chosen;
      });
      setCategories(newCategories);
    }

    function updateSkillFilter(tagId) {
        const newSkills = []; // We create a copy to make the state change and re-render the component properly
        skills.map((skill) => {
            newSkills.push(skill);
            if (skill.id === tagId)
              skill.chosen = !skill.chosen;
        });
        setSkills(newSkills);
    }

  return (
    <section>
        <div className={projectsStyles.mainContainer} >
            <h2 className={`${projectsStyles.title} ${isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}`}>
                Some projects I have worked on
            </h2>
            <div>
                <div>
                    <TagsBar title="Categories" tags={categories} updateTag={updateCategoryFilter} isWhiteTheme={isWhiteTheme} />
                    <TagsBar title="Skills" tags={skills} updateTag={updateSkillFilter} isWhiteTheme={isWhiteTheme} />
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