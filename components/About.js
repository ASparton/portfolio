import PropTypes from 'prop-types';

// next dependencies
import Image from 'next/image'

// images
import mycoffee from '/public/images/photos/mycoffee.png';

// styles
import aboutStyles from '/styles/components/about.module.css';
import globalStyles from '/styles/global.module.css';

const dummyAboutText = "How many times were you frustrated while looking out for a good collection of programming/ algorithm/ interview questions? What did you expect and what did you get? This portal has been created to provide well written, well thought and well explained solutions for selected questions. An IIT Roorkee alumnus and founder of GeeksforGeeks. He loves to solve programming problems in most efficient ways. Apart from GeeksforGeeks, he has worked with DE Shaw and Co. as a software developer and JIIT Noida as an assistant professor. It is a good platform to learn programming. It is an educational website. Prepare for the Recruitment drive of product based companies like Microsoft, Amazon, Adobe etc with a free online placement preparation course.";

function About({ isWhiteTheme }) {
  return (
    <section name="about" className={aboutStyles.aboutSection}>
      <div className={aboutStyles.mainContainer}>

        {/* Title & about text */}
        <div className={aboutStyles.textContainer}>
          <h1 className={`${aboutStyles.helloWorld} ${isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}`}>Hello World!</h1>
          <p className={isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}>{dummyAboutText}</p>
        </div>

        {/* Photo of myself :) */}
        <div className={aboutStyles.coffeeImage}>
          <Image src={mycoffee} alt="Me & my coffee" />
        </div>

      </div>
    </section>
  )
}

About.propTypes = {
  isWhiteTheme: PropTypes.bool.isRequired
};

export default About;