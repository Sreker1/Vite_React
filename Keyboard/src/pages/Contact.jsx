import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      {/* Contact Header */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Feel free to reach out with any questions or feedback.</p>
      </div>

      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="5"
                required
                className="form-input"
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="contact-details">
          <h2>Contact Information</h2>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@keyvibes.com" className="contact-link">
              calpoturarham2@gmial.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+18001234567" className="contact-link">
              (+63) 939 673 9383
            </a>
          </p>
          <p>
            <strong>Address:</strong> Baguio City, Benguet Philippines 2600
          </p>
          <h3>Follow Us</h3>
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
