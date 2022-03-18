import PropTypes from 'prop-types';

//styles
import contactStyles from '/styles/components/contact.module.css'
import globalStyles from '/styles/layout/global.module.css'

function Contact({ isWhiteTheme }) {
  return (
    <section name="contact" className={contactStyles.contactSection}>
      <div className={contactStyles.mainContainer}>
        <div>
          <h1 className={`${contactStyles.title} ${isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}`}>Contact</h1>
          <h3 className={isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}>Want to propose or tell me something ?</h3>
          <div className={contactStyles.shootEmail}>
            <p className={isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}>Use this form or shoot me an email directly on:</p>
            <a href="mailto:sparton.alexandre@gmail.com?subject=From Portfolio" title="Email address" target="_blank" rel="noopener noreferrer"
              className={isWhiteTheme ? globalStyles.linkWhite : globalStyles.linkBlack}>
                <h4 className={isWhiteTheme ? globalStyles.linkWhite : globalStyles.linkBlack}>
                  sparton.alexandre@gmail.com
                </h4>
            </a>
          </div>
        </div>
        <form className={contactStyles.form}>
          <label htmlFor="name" hidden></label>
          <input name="name" id="name" placeholder="Name" autoComplete="on" 
                 className={`${contactStyles.formInput} ${isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}`}>
          </input>
          <label htmlFor="email" hidden></label>
          <input name="email" id="email" placeholder="Email" autoComplete="on"
                 className={`${contactStyles.formInput} ${isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}`}>
          </input>
          <div className={contactStyles.messageInputContainer}>
            <label htmlFor="message" hidden></label>
            <textarea name="message" id="message" placeholder="Message" 
                      className={`${contactStyles.messageInput} ${isWhiteTheme ? globalStyles.textBlack : globalStyles.textWhite}`}>
            </textarea>
          </div>
          <label htmlFor="submitButton" hidden></label>
          <input type="submit" name="submitButton" id="submitButton" value="Send message" 
                 className={isWhiteTheme ? contactStyles.submitButtonBlack : contactStyles.submitButtonWhite}>
          </input>
        </form>
      </div>
    </section>
  )
}

Contact.propTypes = {
  isWhiteTheme: PropTypes.bool.isRequired
}

export default Contact;