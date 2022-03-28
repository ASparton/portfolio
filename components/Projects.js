import PropTypes from 'prop-types';

// react dependencies
import { useState } from 'react';

// next dependencies
import Link from 'next/link';

// subcomponents
import TagsBar from '/components/projects/TagsBar.js';
import ProjectsGrid from '/components/projects/ProjectsGrid.js';

// styles
import projectsStyles from '/styles/components/projects.module.css';
import globalStyles from '/styles/global.module.css';

let dummyCategories = [
    {
        id: 0,
        name: 'Game programming',
        chosen: false
    },
    {
        id: 1,
        name: 'Web application',
        chosen: false
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
        chosen: false
    }
];

let dummySkills = [
    {
        id: 0,
        name: 'Javascript',
        chosen: false
    },
    {
        id: 1,
        name: 'C++',
        chosen: false
    },
    {
        id: 2,
        name: 'OpenGL',
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
        chosen: false
    },
    {
        id: 6,
        name: 'PHP My Admin',
        chosen: false
    },
    {
        id: 7,
        name: 'Godot',
        chosen: false
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
    },
    {
        id: 10,
        name: 'Docker',
        chosen: false
    }
];

const dummyProjects = [
    {
        id: 0,
        title: "OpenFlappy",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                     "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        year: 2020,
        coverUrl: "https://img.phonandroid.com/2014/05/flappy-bird.jpg",
        category: "Graphics programming",
        skills: ["C++", "OpenGL"]
    },
    {
        id: 1,
        title: "Other",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                     "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        year: 2002,
        coverUrl: "https://img.phonandroid.com/2014/05/flappy-bird.jpg",
        category: "Web application",
        skills: ["Javascript", "Postgresql"]
    },
    {
        id: 2,
        title: "Best project",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                     "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        year: 2022,
        coverUrl: "https://img.phonandroid.com/2014/05/flappy-bird.jpg",
        category: "Game programming",
        skills: ["C#", "Unity", "PHP My Admin"]
    },
    {
        id: 3,
        title: "Another cool project",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                     "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        year: 3356,
        coverUrl: "https://img.phonandroid.com/2014/05/flappy-bird.jpg",
        category: "Web application",
        skills: ["PHP", "PHP My Admin"]
    },
    {
        id: 4,
        title: "Assassin's creed 89",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                     "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        year: 772,
        coverUrl: "https://img.phonandroid.com/2014/05/flappy-bird.jpg",
        category: "Game programming",
        skills: ["C++", "Unreal Engine 4", "Docker"]
    }
];



/* Utils contains functions */

Array.prototype.contains = function(elem)
{
    for (let i in this)
    {
        if (this[i] === elem) return true;
    }
    return false;
}

Array.prototype.containsOneIn = function(other)
{
    for (let elem of other)
    {
        if (this.contains(elem)) return true;
    }
    return false;
}



function Projects({ isWhiteTheme, isSection }) {

    const [categories, setCategories] = useState(dummyCategories);  // to update projects and categories tags
    const [skills, setSkills] = useState(dummySkills);  // to update projects and skills tags
    const [projectsFiltered, setProjectsFiltered] = useState(dummyProjects);    // to update displayed projects
    
    /**
     * Select or unselect the category with the given id and update the projects displayed.
     * @param {int} tagId the id of the category to select or unselect 
     */
    function updateCategoryFilter(tagId) {
      const newCategories = []; // We create a copy to make the state change and re-render the component properly
      categories.map((category) => {
          newCategories.push(category);
          if (category.id === tagId)
            category.chosen = !category.chosen;
      });
      setCategories(newCategories);
      updateProjectsFiltered();
    }

    /**
     * Select or unselect the skill with the given id and update the projects displayed.
     * @param {int} tagId the id of the skill to select or unselect
     */
    function updateSkillFilter(tagId) {
        const newSkills = []; // We create a copy to make the state change and re-render the component properly
        skills.map((skill) => {
            newSkills.push(skill);
            if (skill.id === tagId)
              skill.chosen = !skill.chosen;
        });
        setSkills(newSkills);
        updateProjectsFiltered();
    }

    /**
     * Create an array of the current selected tag names.
     * @param {Array} tagsArray the tag array to get the selected names.
     * @returns an array containing the selected tag names (empty if no tag is selected).
     */
    function getChosenTagsName(tagsArray) {
        const selectedTagsName = [];
        tagsArray.map(tag => {
            if (tag.chosen)
                selectedTagsName.push(tag.name);
        });
        return selectedTagsName;
    }

    /**
     * Update the displayed project list with the current filters.
     */
    function updateProjectsFiltered() {
        const selectedCategoriesName = getChosenTagsName(categories);
        const selectedSkillsName = getChosenTagsName(skills);
        
        if (selectedCategoriesName.length === 0 && selectedSkillsName.length === 0) {
            setProjectsFiltered(dummyProjects);
        }
        else {
            setProjectsFiltered(dummyProjects.filter(project => 
                selectedCategoriesName.contains(project.category) || selectedSkillsName.containsOneIn(project.skills)
            ));
        }
    }

  return (
    <section name="projects" className={isSection ? projectsStyles.mainContainerSection : projectsStyles.mainContainer}>

        {/* Section title */}
        {isSection && 
            <h2 className={`${projectsStyles.title} ${isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}`}>
                Some cool projects I built
            </h2>
        }
        

        {/* Projects section */}
        <div>
            {/* Tags bars */}
            <TagsBar title="Categories" tags={categories} updateTagFunction={updateCategoryFilter} isWhiteTheme={isWhiteTheme} />
            <TagsBar title="Skills" tags={skills} updateTagFunction={updateSkillFilter} isWhiteTheme={isWhiteTheme} />

            {/* Displayed projects grid */}
            <ProjectsGrid key={projectsFiltered.length} projectCards={projectsFiltered} isWhiteTheme={isWhiteTheme} inSection={isSection}/>

            {/* All projects button */}
            { isSection && 
                <button title="All projects page" 
                        className={isWhiteTheme ? projectsStyles.allProjectsBtnBlack : projectsStyles.allProjectsBtnWhite}>
                    <Link href="/projects/" alt="All projects page"><p>See all projects</p></Link>
                </button>
            }
        </div>
    </section>
  )
}

Projects.propTypes = {
    isWhiteTheme: PropTypes.bool.isRequired,
    isSection: PropTypes.bool.isRequired
};

export default Projects;