import PropTypes from 'prop-types';
import axios from 'axios';

// subcomponents
import ContactHeader from '/components/contact/ContactHeader.js';
import ContactForm from '/components/contact/ContactForm.js';

// styles
import contactStyles from '/styles/components/contact.module.css';

function Contact({ isWhiteTheme }) {

  /**
   * Try sending an email with the given infos
   */
  function onFormSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    // Build the request data
    const requestData = {
      service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICEID,
      template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID,
      user_id: process.env.NEXT_PUBLIC_EMAILJS_USERID,
      template_params: {
        sender_name: event.target.name.value,
        sender_email: event.target.email.value,
        message: event.target.message.value,
      },
      accessToken: process.env.NEXT_PUBLIC_EMAILJS_ACCESSTOKEN
    }

    // Ask the intern API to send the email with the form informations
    axios.post('https://api.emailjs.com/api/v1.0/email/send', requestData)
    .then((res) => {
      console.log(res);
      alert("Email sent. Thank you for your interest! ");
    })
    .catch((err) => {
      console.log(err);
      alert("We were not able to send the email. Please try again later.")
    });
  }

  return (
    <section name="contact" className={contactStyles.contactSection}>
      <div className={contactStyles.mainContainer}>
        <ContactHeader isWhiteTheme={isWhiteTheme} />
        <ContactForm onSubmitFunction={onFormSubmit} isWhiteTheme={isWhiteTheme} />
      </div>
    </section>
  )
}

Contact.propTypes = {
  isWhiteTheme: PropTypes.bool.isRequired
};

export default Contact;