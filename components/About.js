import PropTypes from 'prop-types';

// next dependencies
import Image from 'next/image'

// images
import mycoffee from '/public/photos/mycoffee.png';

// styles
import aboutStyles from '/styles/components/about.module.css';
import globalStyles from '/styles/global.module.css';

function About({ aboutText, isWhiteTheme }) {
  return (
    <section name="about" className={aboutStyles.aboutSection}>
      <div className={aboutStyles.mainContainer}>

        {/* Title & about text */}
        <div className={aboutStyles.textContainer}>
          <h1 className={`${aboutStyles.helloWorld} ${isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}`}>Hello World!</h1>
          <p className={isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}>{aboutText}</p>
        </div>

        {/* Photo of myself :) */}
        <div className={aboutStyles.coffeeImage}>
          <Image src={mycoffee} alt="Me & my coffee" priority />
        </div>

      </div>
    </section>
  )
}

About.propTypes = {
  aboutText: PropTypes.string.isRequired,
  isWhiteTheme: PropTypes.bool.isRequired
};

export default About;