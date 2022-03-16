import PropTypes from 'prop-types';

import Image from 'next/image'

// icons
import plusBlack from '/public/images/icons/plusBlack.png';
import minusBlack from '/public/images/icons/minusBlack.png';

//styles
import barStyles from '/styles/components/projects/bar.module.css';
import globalStyles from '/styles/layout/global.module.css';

function TagsBar({ title, tags, isWhiteTheme }) {

  function onTagClick(event) {
    event.stopPropagation();
    event.preventDefault();

    console.log(event.target);
  }

  return (
    <div className={barStyles.mainContainer}>
      <h4 className={isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}>{title}</h4>
      <ul className={barStyles.tagsContainer}>
        {
          tags.map((tag) => (
            <li key={tag.id} 
                className={isWhiteTheme ? barStyles.tagBlack : barStyles.tagWhite}
                title={tag.chosen ? "Remove tag" : "Add tag"}>
              <div className={barStyles.tag}>
                <p className={`${barStyles.tagName} ${isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}`}>{tag.name}</p>
                <div className={barStyles.tagIcon}>
                  <Image src={tag.chosen ? minusBlack : plusBlack} alt={tag.chosen ? "Minus icon" : "Plus icon"} />
                </div>
              </div>
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