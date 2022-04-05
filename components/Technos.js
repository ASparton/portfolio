import PropTypes from 'prop-types';

// subcomponents
import TechnoIcon from '/components/technos/TechnoIcon.js';

// styles
import technosStyles from '/styles/components/technos.module.css';
import globalStyles from '/styles/global.module.css';

function Technos({ technos, isWhiteTheme }) {
  return (
    <section name="technos" className={technosStyles.technosSection}>

      {/* Section title */}
      <h2 className={isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}>Technologies & Tools</h2>
      <h2 className={isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}>I like to work on these days</h2>

      {/* Logos list */}
      <article className={technosStyles.iconsContainer}>
        <div className={technosStyles.iconsRow}>
          {technos.slice(0, 3).map((techno) => <TechnoIcon key={techno.id} techno={techno}/>)}
        </div>
        <div className={technosStyles.iconsRow}>
          {technos.slice(3, 6).map((techno) => <TechnoIcon key={techno.id} techno={techno}/>)}
        </div>
        <div className={technosStyles.iconsRow}>
          {technos.slice(6, 9).map((techno) => <TechnoIcon key={techno.id} techno={techno}/>)}
        </div>
      </article>
      
    </section>
  )
}

Technos.propTypes = {
  technos: PropTypes.arrayOf(PropTypes.object).isRequired,
  isWhiteTheme: PropTypes.bool.isRequired
};

export default Technos;