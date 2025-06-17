import React from 'react';
// import './Contact.css'; 

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-container">
   <h2 className="contact-heading">Contact Me</h2>
        <div className="contact-content">
          <div className="contact-left">
               <h3 className="contact-subheading">Let's Talk</h3>
             <p>I'm open to discussing web development projects or partnership opportunities.</p>
             <div className="contact-info">
        
              <a href="mailto:kartikjha1102@gmail.com">kartikjha1102@gmail.com</a>
         </div>
             <div className="contact-info">
        
               <span>+91 9953745415</span>
            </div>
             <div className="contact-info">
          
              <span> Delhi, India</span>
             </div>
        </div>
           <div className="contact-right">
            <form className="contact-form">
               <div className="form-group">
                <label htmlFor="name">Your Name</label>
                 <input type="text" id="name" name="name" placeholder="Enter Your Name" required />
               </div>
               <div className="form-group">
               <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter Your Email" required />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                 <textarea id="message" name="message" rows="5" placeholder="Enter Your Message" required />
               </div>
              <button type="submit" className="send-button">Send</button>
             </form>
          </div>
         </div>
      </div>
    </div>
  );
};

       export default Contact
