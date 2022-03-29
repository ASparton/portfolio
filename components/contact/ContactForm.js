import PropTypes from 'prop-types';

// styles
import contactFormStyles from '/styles/components/contact/contactForm.module.css';
import globalStyles from '/styles/global.module.css';

function ContactForm({ onSubmitFunction, isWhiteTheme }) {
  return (
    <form className={contactFormStyles.form} onSubmit={onSubmitFunction}>

      {/* Name */}
      <label htmlFor="name" hidden></label>
      <input type="text" name="name" id="name" placeholder="Name" autoComplete="name" required
             className={`${contactFormStyles.formInput} ${isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}`}>
      </input>

      {/* Email */}
      <label htmlFor="email" hidden></label>
      <input type="email" name="email" id="email" placeholder="Email" autoComplete="email" required
             className={`${contactFormStyles.formInput} ${isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}`}>
      </input>

      {/* Message content */}
      <div className={contactFormStyles.messageInputContainer}>
        <label htmlFor="message" hidden></label>
        <textarea name="message" id="message" placeholder="Message" required
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
  onSubmitFunction: PropTypes.func.isRequired,
  isWhiteTheme: PropTypes.bool.isRequired
};

export default ContactForm;