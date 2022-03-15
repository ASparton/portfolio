import PropTypes from 'prop-types';

//styles
import barStyles from '/styles/components/projects/bar.module.css';
import globalStyles from '/styles/layout/global.module.css';

function TagsBar({ title, tags, isWhiteTheme }) {

  return (
    <div className={barStyles.mainContainer}>
      <h4 className={isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}>{title}</h4>
      <ul className={barStyles.tagsContainer}>
        {
          tags.map((tag) => (
            <li key={tag.id} 
                className={isWhiteTheme ? barStyles.tagBlack : barStyles.tagWhite}>
              <p className={isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}>{tag.name}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

TagsBar.propTypes = {
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    isWhiteTheme: PropTypes.bool.isRequired
};

export default TagsBar;