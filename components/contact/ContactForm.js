import PropTypes from 'prop-types';

// styles
import contactFormStyles from '/styles/components/contact/contactForm.module.css';
import globalStyles from '/styles/global.module.css';

function ContactForm({ isWhiteTheme }) {
  return (
    <form className={contactFormStyles.form}>

      {/* Name */}
      <label htmlFor="name" hidden></label>
      <input name="name" id="name" placeholder="Name" autoComplete="on" 
             className={`${contactFormStyles.formInput} ${isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}`}>
      </input>

      {/* Email */}
      <label htmlFor="email" hidden></label>
      <input name="email" id="email" placeholder="Email" autoComplete="on"
             className={`${contactFormStyles.formInput} ${isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}`}>
      </input>

      {/* Message content */}
      <div className={contactFormStyles.messageInputContainer}>
        <label htmlFor="message" hidden></label>
        <textarea name="message" id="message" placeholder="Message" 
                  className={`${contactFormStyles.messageInput} ${isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}`}>
        </textarea>
      </div>

      {/* Send message (submit) button */}
      <label htmlFor="submitButton" hidden></label>
      <input type="submit" name="submitButton" id="submitButton" value="Send message" 
             className={isWhiteTheme ? contactFormStyles.submitButtonBlack : contactFormStyles.submitButtonWhite}>
      </input>

    </form>
  )
}

ContactForm.propTypes = {
    isWhiteTheme: PropTypes.bool.isRequired
};

export default ContactForm;