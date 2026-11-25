import "./Contact.css";

function Contact() {
  return (
    <section className="contact-page" id="contact">
      <div className="contact-wrapper">
        <div className="contact-inner">

          <div className="contact-heading">
            <span>✦ GET IN TOUCH ✦</span>
            <h1>LET'S CONNECT!</h1>
            <p>
              Interested in working together or have an opportunity?
              Feel free to reach out!
            </p>
          </div>

          <div className="contact-details">

            <a href="mailto:apoorvammaganur792@gmail.com">
              📧 <span>Email</span>
              <small>apoorvammaganur792@gmail.com</small>
            </a>

            <a href="tel:+917337860864">
              📞 <span>Phone</span>
              <small>+91 7337860864</small>
            </a>

            <a
              href="https://github.com/apoorvammaganur792-droid"
              target="_blank"
              rel="noopener noreferrer"
            >
              💻 <span>GitHub</span>
              <small>View my GitHub profile ↗</small>
            </a>

            <a
              href="https://www.linkedin.com/in/apoorva-m-maganur-39166232a"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 <span>LinkedIn</span>
              <small>Connect with me ↗</small>
            </a>

          </div>

          <div className="contact-footer">
            <p>Designed & built with ♡ by Apoorva</p>
            <span>© 2026 All rights reserved.</span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;