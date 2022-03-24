import PropTypes from 'prop-types';

// subcomponents
import Tag from '/components/projects/tagsbar/Tag.js';

// styles
import barStyles from '/styles/components/projects/bar.module.css';
import globalStyles from '/styles/global.module.css';

function TagsBar({ title, tags, updateTagFunction, isWhiteTheme }) {
  return (
    <div className={barStyles.mainContainer}>

      {/* Tags bar title */}
      <h4 className={`${isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}
                      ${barStyles.title}`}>{title}</h4>

      {/* Tags list */}
      <ul className={barStyles.tagsContainer}>
        {tags.map((tag) => (
            <li key={tag.id} 
                className={barStyles.tagContainer}
                title={tag.chosen ? "Remove " + tag.name + " tag" : "Add " + tag.name + " tag"}>
                <Tag tag={tag} updateTagFunction={updateTagFunction} isWhiteTheme={isWhiteTheme} />
            </li>
          ))}
      </ul>

    </div>
  )
}

TagsBar.propTypes = {
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.object).isRequired,
    updateTagFunction: PropTypes.func.isRequired,
    isWhiteTheme: PropTypes.bool.isRequired
};

export default TagsBar;