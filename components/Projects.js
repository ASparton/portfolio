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



function Projects({ dbCategories, dbSkills, dbProjects, isWhiteTheme, isSection }) {

    const [categories, setCategories] = useState(dbCategories);  // to update projects and categories tags
    const [skills, setSkills] = useState(dbSkills);  // to update projects and skills tags
    const [projectsFiltered, setProjectsFiltered] = useState(dbProjects);    // to update displayed projects
    
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
            setProjectsFiltered(dbProjects);
        }
        else {
            setProjectsFiltered(dbProjects.filter(project => 
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
    dbCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
    dbSkills: PropTypes.arrayOf(PropTypes.object).isRequired,
    dbProjects: PropTypes.arrayOf(PropTypes.object).isRequired,
    isWhiteTheme: PropTypes.bool.isRequired,
    isSection: PropTypes.bool.isRequired
};

export default Projects;