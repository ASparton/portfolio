import PropTypes from 'prop-types';

// subcomponents
import ContactHeader from '/components/contact/ContactHeader.js';
import ContactForm from '/components/contact/ContactForm.js';

// styles
import contactStyles from '/styles/components/contact.module.css';

function Contact({ isWhiteTheme }) {
  return (
    <section name="contact" className={contactStyles.contactSection}>
      <div className={contactStyles.mainContainer}>
        <ContactHeader isWhiteTheme={isWhiteTheme} />
        <ContactForm isWhiteTheme={isWhiteTheme} />
      </div>
    </section>
  )
}

Contact.propTypes = {
  isWhiteTheme: PropTypes.bool.isRequired
};

export default Contact;