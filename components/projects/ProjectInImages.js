import PropTypes from 'prop-types';

// react dependencies
import { useState, useEffect } from 'react';

// styles
import inImagesStyles from '/styles/components/projects/inImages.module.css';
import globalStyles from '/styles/global.module.css';

function ProjectInImages({ projectTitle, imagesAndVideosBundle, isWhiteTheme }) {

  const [videosHeight, setVideosHeight] = useState(200);

  function updateVideosHeight() {
    if (window.innerWidth > 900)
      setVideosHeight(200);
    if (window.innerWidth <= 900 && window.innerWidth > 650)
      setVideosHeight(150);
    if (window.innerWidth <= 650 && window.innerWidth > 500)
      setVideosHeight(125);
    if (window.innerWidth <= 500 && window.innerWidth > 300)
      setVideosHeight(150);
  }

  useEffect(() => {
    window.addEventListener('resize', updateVideosHeight);
    updateVideosHeight();
  }, []);

  let bundleKey = 0;

  /**
   * Return an html video or image to render depending on the item given.
   * @param {string} item the source link of the image or the video. 
   * @returns the html <li> element with the image or video inside.
   */
  function displayImageOrVideo(item) {
    
    if (item.startsWith("https://www.youtube.com/embed")) {
      return <li key={bundleKey++} className={inImagesStyles.videoContainer}>
               <iframe src={item} title={projectTitle + " video"} className={inImagesStyles.video}
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                       allowFullScreen height={videosHeight}></iframe>
             </li>
    }
    else {
      return <li key={bundleKey++} className={inImagesStyles.imageContainer}>
               <img src={item} title={projectTitle + " image"} className={inImagesStyles.image} />
             </li>
    }
  }

  return (
    <section name="inimages" className={inImagesStyles.mainContainer}>
      <h2 className={`${inImagesStyles.title} ${isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}`}>
          {projectTitle} in images
      </h2>
      <ul className={inImagesStyles.bundleContainer}>
        {imagesAndVideosBundle.map((item) => displayImageOrVideo(item))}
      </ul>
    </section>
  )
}

ProjectInImages.propTypes = {
    projectTitle: PropTypes.string.isRequired,
    imagesAndVideosBundle: PropTypes.arrayOf(PropTypes.string).isRequired,
    isWhiteTheme: PropTypes.bool.isRequired
};

export default ProjectInImages;