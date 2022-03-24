import PropTypes from 'prop-types';

// subcomponents
import TechnoIcon from '/components/technos/TechnoIcon.js';

// styles
import technosStyles from '/styles/components/technos.module.css';
import globalStyles from '/styles/global.module.css';

const dummyTechnos = [
  {
    id: 0,
    name: "Javascript",
    link: "https://www.javascript.com/",
    iconLink: "https://img.icons8.com/color/240/000000/javascript--v1.png"
  },
  {
    id: 1,
    name: "React.js",
    link: "https://reactjs.org/",
    iconLink: "https://img.icons8.com/office/240/000000/react.png"
  },
  {
    id: 2,
    name: "Next.js",
    link: "https://nextjs.org/",
    iconLink: "https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"
  },
  {
    id: 3,
    name: "C#",
    link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
    iconLink: "https://img.icons8.com/color/240/000000/c-sharp-logo.png"
  },
  {
    id: 4,
    name: "Unity",
    link: "https://unity.com/",
    iconLink: "https://img.icons8.com/color/240/000000/unity.png"
  },
  {
    id: 5,
    name: "Godot",
    link: "https://godotengine.org/",
    iconLink: "https://user-images.githubusercontent.com/36481442/100391965-27e38c00-3046-11eb-942e-bdc85bb43cfb.png"
  },
  {
    id: 6,
    name: "Python",
    link: "https://www.python.org/",
    iconLink: "https://img.icons8.com/dusk/240/000000/python.png"
  },
  {
    id: 7,
    name: "Postgresql",
    link: "https://www.postgresql.org/",
    iconLink: "https://img.icons8.com/color/240/000000/postgreesql.png"
  },
  {
    id: 8,
    name: "Docker",
    link: "https://www.docker.com/",
    iconLink: "https://img.icons8.com/fluency/240/000000/docker.png"
  }
]

function Technos({ isWhiteTheme }) {
  return (
    <section name="technos" className={technosStyles.technosSection}>

      {/* Section title */}
      <h2 className={isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}>Technologies & Tools</h2>
      <h2 className={isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}>I like to work on these days</h2>

      {/* Logos list */}
      <article className={technosStyles.iconsContainer}>
        {
          /*dummyTechnos.map((techno, index) => {
            <TechnoIcon key={techno.id} techno={techno} />
          })*/
        }
      </article>
      
    </section>
  )
}

Technos.propTypes = {
  isWhiteTheme: PropTypes.bool.isRequired
}

export default Technos;