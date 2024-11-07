import React, { useState } from 'react';
import './Form.css';

function Form() {
  // State for contact form inputs
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Handle input change for contact form fields
  const handleContactChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${contactData.name}:\n${contactData.message}`);
    // Reset form fields after submission
    setContactData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="form-container">
      <div className="left-panel">
        <h1>Get in Touch</h1>
        <p>I'd love to collaborate on a project or chat! Fill out this form, or message me on my socials.</p>

        {/* Contact Info with Icons */}
        <div className="contact-info">
          <div className="contact-item">
            <i className="uil uil-phone"></i>
            <span>+27603870577</span>
          </div>
          <div className="contact-item">
            <i className="uil uil-envelope-minus"></i>
            <span>mlangenizandile84@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="right-panel">
        {/* Contact Form */}
        <form onSubmit={handleContactSubmit}>
          <h3>Send me a message</h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contactData.name}
            onChange={handleContactChange}
            className="form-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={contactData.email}
            onChange={handleContactChange}
            className="form-input"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={contactData.subject}
            onChange={handleContactChange}
            className="form-input"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={contactData.message}
            onChange={handleContactChange}
            className="form-textarea"
            required
          />
          <button type="submit" className="form-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
