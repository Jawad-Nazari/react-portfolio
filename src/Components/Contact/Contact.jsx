import React, { useRef, useState } from 'react';
import './Contact.css';
import { VscGithub } from 'react-icons/vsc';
import { CgMail } from 'react-icons/cg';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../Context/theme';

const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        'service_cfcxjj7',
        'template_n7xeb6r',
        form.current,
        'Jpx1szaixTQKeabPS',
      );
      setSuccessMessage('Your message has been sent successfully!');
      e.target.reset();
    } catch (error) {
      setSuccessMessage('An error occurred while sending the message.');
    }
  };

  return (
    <>
      <section className="section">
        <h2 className="section__title">
          Get in
          <span className="different"> Touch</span>
        </h2>
        <div className="contactMain">
          <div className={`contactcontainer ${themename}`}>
            <a
              href="https://www.linkedin.com/in/Jawad-Nazari/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="linkedin" />
            </a>
            <a
              href="https://github.com/Jawad-Nazari/"
              target="_blank"
              rel="noreferrer"
              aria-label="Github Profile"
            >
              <VscGithub className="github" />
            </a>
            <a
              href="mailto:Jawad.Nazari@outlook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Jawad Email address"
            >
              <CgMail className="email" />
            </a>
            <a
              href="tel:+923140970147"
              aria-label="Jawad Phone Number"
              target="_blank"
              rel="noreferrer"
            >
              <BsFillTelephoneFill className="phone" />
            </a>
          </div>
          <div className="mailNumber">
            <div>
              <span>
                <CgMail className="email" />
              </span>
              <span>
                <p>Jawad.Nazari@outlook.com</p>
              </span>
            </div>
            <div className="iconsCont">
              <span>
                <BsFillTelephoneFill className="phone" />
              </span>
              <span>
                <p>+923140970147</p>
              </span>
            </div>
          </div>
        </div>
        {successMessage && (
          <div className="contactcontainer">{successMessage}</div>
        )}
      </section>

      <div className="contactForm">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            id="user_name"
            name="user_name"
            placeholder="Your Name"
          />
          <input
            type="email"
            id="user_email"
            name="user_email"
            placeholder="Your Email"
          />
          <textarea id="message" name="message" placeholder="Your Message" />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
