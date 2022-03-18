import PropTypes from 'prop-types';
import { useState } from 'react'

import Image from 'next/image'

// icons
import plusBlack from '/public/images/icons/plusBlack.png';
import plusWhite from '/public/images/icons/plusWhite.png';
import minusBlack from '/public/images/icons/minusBlack.png';
import minusWhite from '/public/images/icons/minusWhite.png';

//styles
import barStyles from '/styles/components/projects/bar.module.css';
import globalStyles from '/styles/layout/global.module.css';

function TagsBar({ title, tags, updateTag, isWhiteTheme }) {

  const [tagStatus, setTagStatus] = useState({tagId: -1, 
                                              showIcon: false});

  function onTagEnter(event) {
    event.preventDefault();
    event.stopPropagation();

    setTagStatus({tagId: parseInt(event.currentTarget.id),
                  showIcon: true});
  }

  function onTagLeave(event) {
    event.preventDefault();
    event.stopPropagation();

    setTagStatus({tagId: parseInt(event.currentTarget.id),
                  showIcon: false});
  }

  function onTagClick(event) {
    event.preventDefault();
    event.stopPropagation();
    updateTag(parseInt(event.currentTarget.id));
  }

  return (
    <div className={barStyles.mainContainer}>
      <h4 className={isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}>{title}</h4>
      <ul className={barStyles.tagsContainer}>
        {
          tags.map((tag) => (

            <li key={tag.id} 
                className={barStyles.tagContainer}
                title={tag.chosen ? "Remove " + tag.name + " tag" : "Add " + tag.name + " tag"}>

              <p  id={tag.id}
                  onMouseEnter={onTagEnter}
                  onMouseLeave={onTagLeave}
                  onClick={onTagClick}
                  className={`${tag.chosen ? isWhiteTheme ? barStyles.tagChosenBlack : barStyles.tagChosenWhite 
                                           : isWhiteTheme ? barStyles.tagBlack  : barStyles.tagWhite} 
                             ${isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}`}>
                {tag.name}
              </p>
              <div className={tagStatus.tagId === tag.id && tagStatus.showIcon ? barStyles.tagIcon : barStyles.tagIconHided}>
                <Image src={tag.chosen ? isWhiteTheme ? minusBlack : minusWhite
                                       : isWhiteTheme ? plusBlack : plusWhite}
                       alt={tag.chosen ? "Minus icon" : "Plus icon"} />
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
    tags: PropTypes.arrayOf(PropTypes.object).isRequired,
    updateTag: PropTypes.func.isRequired,
    isWhiteTheme: PropTypes.bool.isRequired
};

export default TagsBar;