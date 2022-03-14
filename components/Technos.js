import PropTypes from 'prop-types';

import Image from 'next/image'

// images
import jsLogo from '/public/images/icons/js.png' 
import reactLogo from '/public/images/icons/react.png' 
import nextLogo from '/public/images/icons/nextjs.png' 
import csharpLogo from '/public/images/icons/csharp.png' 
import unityLogo from '/public/images/icons/unity.png' 
import godotLogo from '/public/images/icons/godot.svg' 
import pythonLogo from '/public/images/icons/python.png' 
import postgresqlLogo from '/public/images/icons/postgresql.png' 
import dockerLogo from '/public/images/icons/docker.png' 

// styles
import technosStyles from '/styles/components/technos.module.css'
import globalStyles from '/styles/layout/global.module.css'

function Technos({ isWhiteTheme }) {
  return (
    <section name="technos" className={technosStyles.technosSection}>
      <h2 className={isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}>Technologies & Tools</h2>
      <h2 className={isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}>I like to work on these days</h2>
      <div className={technosStyles.iconsContainer}>
        <div className={technosStyles.iconsRow}>
          <a className={technosStyles.icon} href="https://www.javascript.com/" title="Javascript website" target="_blank" rel="noopener noreferrer">
            <Image src={jsLogo} alt="Javascript logo" />
          </a>
          <a className={technosStyles.icon} href="https://reactjs.org/" title="React JS website" target="_blank" rel="noopener noreferrer">
            <Image src={reactLogo} alt="React.js logo" />
          </a>
          <a className={technosStyles.icon} href="https://nextjs.org/" title="Next JS website" target="_blank" rel="noopener noreferrer">
            <Image src={nextLogo} alt="Next.js logo" />
          </a>
        </div>
        <div className={technosStyles.iconsRow}>
          <a className={technosStyles.icon} href="https://docs.microsoft.com/en-us/dotnet/csharp/" title="C# website" target="_blank" rel="noopener noreferrer">
            <Image src={csharpLogo} alt="C# logo" />
          </a>
          <a className={technosStyles.icon} href="https://unity.com/" title="Unity website" target="_blank" rel="noopener noreferrer">
            <Image src={unityLogo} alt="Unity logo" />
          </a>
          <a className={technosStyles.icon} href="https://godotengine.org/" title="Godot website" target="_blank" rel="noopener noreferrer">
            <Image src={godotLogo} alt="Godot logo" />
          </a>
        </div>
        <div className={technosStyles.iconsRow}>
          <a className={technosStyles.icon} href="https://www.python.org/" title="Python website" target="_blank" rel="noopener noreferrer">
            <Image src={pythonLogo} alt="Python logo" />
          </a>
          <a className={technosStyles.icon} href="https://www.postgresql.org/" title="Postgresql website" target="_blank" rel="noopener noreferrer">
            <Image src={postgresqlLogo} alt="Postgresql logo" />
          </a>
          <a className={technosStyles.icon} href="https://www.docker.com/" title="Docker website" target="_blank" rel="noopener noreferrer">
            <Image src={dockerLogo} alt="Docker logo" />
          </a>
        </div>
      </div>
    </section>
  )
}

Technos.propTypes = {
  isWhiteTheme: PropTypes.bool.isRequired
}

export default Technos;