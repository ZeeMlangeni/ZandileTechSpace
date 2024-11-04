import React, { useState } from 'react';
import "./Form.css";

function Form() {
  // State for contact form inputs
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // Handle input change for contact form fields
  const handleContactChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${contactData.name}:\n${contactData.message}`);
    // Reset form fields after submission
    setContactData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="form container">
      {/* Contact Form */}
      <form className="form section" onSubmit={handleContactSubmit}>
        <h1>Get in Touch</h1>
        <p>I'd love to collaborate on a project or chat! Fill out this form, or message me on my socials.</p>

        <i class="uil uil-phone"></i> <p>+27603870577</p>
        <i class="uil uil-envelope-minus"></i><p>mlangenizandile84@gmail.com</p>
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
  );
}

export default Form;
