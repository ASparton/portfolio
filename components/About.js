import PropTypes from 'prop-types';

// next dependencies
import Image from 'next/image'

// images
import mycoffee from '/public/photos/mycoffee.png';

// styles
import aboutStyles from '/styles/components/about.module.css';
import globalStyles from '/styles/global.module.css';

function About({ isWhiteTheme }) {
  return (
    <section name="about" className={aboutStyles.aboutSection}>
      <div className={aboutStyles.mainContainer}>

        {/* Title & about text */}
        <div className={aboutStyles.textContainer}>
          <h1 className={`${aboutStyles.helloWorld} ${isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}`}>Hello World!</h1>
          <p className={isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}> I am Alexandre, a French IT student and a passionate software developer. I am currently specialized in Javascript full stack web applications, but I am really curious about development in general. I enjoy stimulating my creativity and then thinking about the best and simple way to bring my ideas to the final users. On this website, you will be able to take a look at some of my work and get to know the technologies I am currently interested in. Don't hesitate to contact me if you want to give feedback or say whatever you want!
          </p>
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
  isWhiteTheme: PropTypes.bool.isRequired
};

export default About;