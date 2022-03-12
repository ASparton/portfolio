function Contact() {
  return (
    <section name="contact">
      <div>
        <h1>Contact</h1>
        <h3>Want to propose or tell me something ?</h3>
        <p>Use this form or shoot me an emai directly here: <a href="mailto:sparton.alexandre@gmail.com?subject=From Portfolio" title="Email address" target="_blank" rel="noopener noreferrer">sparton.alexandre@gmail.com</a>
        </p>
      </div>
      <form>
          <label htmlFor="name" hidden></label>
          <input name="name" id="name" placeholder="Name" autoComplete="on"></input>
          <label htmlFor="email" hidden></label>
          <input name="email" id="email" placeholder="Email" autoComplete="on"></input>
          <label htmlFor="message" hidden></label>
          <textarea name="message" id="message" placeholder="Message"></textarea>
          <label htmlFor="submitButton" hidden></label>
          <input type="submit" name="submitButton" id="submitButton" value="Send message"></input>
      </form>
    </section>
  )
}

export default Contact;