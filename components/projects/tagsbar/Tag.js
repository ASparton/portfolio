import PropTypes from 'prop-types';

// react dependencies
import { useState } from 'react';

// next dependencies
import Image from 'next/image';

// images
import plusBlack from '/public/icons/plusBlack.png';
import plusWhite from '/public/icons/plusWhite.png';
import minusBlack from '/public/icons/minusBlack.png';
import minusWhite from '/public/icons/minusWhite.png';

// styles
import tagStyles from '/styles/components/projects/tagsbar/tag.module.css';
import globalStyles from '/styles/global.module.css';

function Tag({ tag, updateTagFunction, isWhiteTheme }) {
  
  // to update the tag style when its selected or unselected
  const [tagStatus, setTagStatus] = useState({tagId: -1, 
                                              showIcon: tag.chosen});

  /**
   * Show the plus or minus icon.
   * @param event the mouse enter event. 
   */
  function onTagEnter(event) {
    setTagStatus({tagId: parseInt(event.currentTarget.id),
                  showIcon: true});
    
  }

  /**
   * Hide the plus or minus icon.
   * @param event the mouse leave event. 
   */
  function onTagLeave(event) {
    setTagStatus({tagId: parseInt(event.currentTarget.id),
                  showIcon: false});
  }

  /**
   * Update the tag status and projects list.
   * @param event the mouse click event. 
   */
  function onTagClick(event) {
    updateTagFunction(parseInt(event.currentTarget.id));
  }
  
  return (
    <>
      {/* Tag text */}
      <p  id={tag.id}
          onMouseEnter={onTagEnter}
          onMouseLeave={onTagLeave}
          onClick={onTagClick}
          className={`${tag.chosen ? isWhiteTheme ? tagStyles.tagChosenBlack : tagStyles.tagChosenWhite 
                                  : isWhiteTheme ? tagStyles.tagBlack  : tagStyles.tagWhite} 
                  ${isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}`}>
      {tag.name}
      </p>
      
      {/* Tag plus or minus button */}
      <div className={tagStatus.tagId === tag.id && tagStatus.showIcon ? tagStyles.tagIcon : tagStyles.tagIconHided}>
      <Image src={tag.chosen ? isWhiteTheme ? minusBlack : minusWhite
                              : isWhiteTheme ? plusBlack : plusWhite}
              alt={tag.chosen ? "Minus icon" : "Plus icon"} />
      </div>
    </>
  )
}

Tag.propTypes = {
    tag: PropTypes.object.isRequired,
    updateTagFunction: PropTypes.func.isRequired,
    isWhiteTheme: PropTypes.bool.isRequired
};

export default Tag;