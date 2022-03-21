import PropTypes from 'prop-types';

// subcomponents
import TechnoIcon from '/components/technos/TechnoIcon.js';

// images
import jsLogo from '/public/images/icons/js.png';
import reactLogo from '/public/images/icons/react.png';
import nextLogo from '/public/images/icons/nextjs.png';
import csharpLogo from '/public/images/icons/csharp.png';
import unityLogo from '/public/images/icons/unity.png';
import godotLogo from '/public/images/icons/godot.svg';
import pythonLogo from '/public/images/icons/python.png';
import postgresqlLogo from '/public/images/icons/postgresql.png';
import dockerLogo from '/public/images/icons/docker.png';

// styles
import technosStyles from '/styles/components/technos.module.css';
import globalStyles from '/styles/global.module.css';

function Technos({ isWhiteTheme }) {
  return (
    <section name="technos" className={technosStyles.technosSection}>

      {/* Section title */}
      <h2 className={isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}>Technologies & Tools</h2>
      <h2 className={isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}>I like to work on these days</h2>

      {/* Logos list */}
      <article className={technosStyles.iconsContainer}>

        <div className={technosStyles.iconsRow}>
          <TechnoIcon image={jsLogo} name="Javascript" websiteLink="https://www.javascript.com/" />
          <TechnoIcon image={reactLogo} name="React.js" websiteLink="https://reactjs.org/" />
          <TechnoIcon image={nextLogo} name="Next.js" websiteLink="https://nextjs.org/" />
        </div>

        <div className={technosStyles.iconsRow}>
          <TechnoIcon image={csharpLogo} name="C#" websiteLink="https://docs.microsoft.com/en-us/dotnet/csharp/" />
          <TechnoIcon image={unityLogo} name="Unity" websiteLink="https://unity.com/" />
          <TechnoIcon image={godotLogo} name="Godot" websiteLink="https://godotengine.org/" />
        </div>

        <div className={technosStyles.iconsRow}>
          <TechnoIcon image={pythonLogo} name="Python" websiteLink="https://www.python.org/" />
          <TechnoIcon image={postgresqlLogo} name="Postgresql" websiteLink="https://www.postgresql.org/" />
          <TechnoIcon image={dockerLogo} name="Docker" websiteLink="https://www.docker.com/" />
        </div>

      </article>
      
    </section>
  )
}

Technos.propTypes = {
  isWhiteTheme: PropTypes.bool.isRequired
}

export default Technos;