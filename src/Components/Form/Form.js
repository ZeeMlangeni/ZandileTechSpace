import React, { useState } from 'react';
import './Form.css';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Form() {
 
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  
  const handleContactChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value
    });
  };

  
  const handleContactSubmit = (e) => {
    e.preventDefault();
  
    /*********** Send the email using EmailJS************ */
    emailjs.sendForm(
      'service_0djau6q', 
      'template_27fetn8', 
      e.target, 
      'u0LMgGZw5twSkzOy-' 
    ).then(
      (result) => {
        console.log(result.text); 
        toast.success('Message sent successfully!', {
          position: "top-right",
          autoClose: 5000,  // The toast will disappear after 5 seconds
          hideProgressBar: false,  // Show progress bar
        });
        setContactData({ name: '', email: '', subject: '', message: '' });
      },
      (error) => {
        console.log(error.text);
        toast.error('There was an error sending your message. Please try again.');
      }
    );
  };
  

  return (
    <div className="form-container" id="form">
      <div className="left-panel">
        <h1 className='head'>Get in Touch</h1>
        <p>I'd love to collaborate on a project or chat! Fill out this form, or message me on my socials.</p>


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
       
        <form onSubmit={handleContactSubmit}>
        <h3 className='head-two'>Send me a message</h3>
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

       {/* ToastContainer to display notifications */}
       <ToastContainer />
    </div>
  );
}

export default Form;
