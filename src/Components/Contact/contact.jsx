import React from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ov1uj8x', 'template_c6jtacn', form.current, {
        publicKey: 'g3rXXEOUjhfQp4s6RYT53',
      })
      .then(
        () => {
          alert("email sent");
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id='contactPage'>
        <div id="contact">
            <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>Please Fill out the form below to discuss any work opportunities</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name = 'your_name'/>
                    <input type="email" className="email" placeholder='Your Email' name = 'your_email'/>
                    <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                    <button type='submit' className="submitBtn" value='send'>Submit</button>
                    <div className="links">
                        <img src={FacebookIcon} alt="" className="link" />
                        <img src={InstagramIcon} alt="" className="link" />
                    </div>
                </form>
        </div>
    </section>
  )
}

export default Contact;
