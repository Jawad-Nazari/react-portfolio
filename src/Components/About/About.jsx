import React from 'react';
import './About.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Type from './Type';
import Introduction from './Introduction';
import Techstacks from './Techstacks';

const About = () => (
  <>
    <div className="about center">
      <h1 className="mobileHead">
        Hello, I am
        <span className="about__name"> Jawad Nazari</span>
      </h1>
      <Type />
      <p className="about__desc">
        Passionate Full Stack Developer having proficiency in Information
        Technology. I love working on challenging projects and always aim to
        produce high-quality and maintainable code.
      </p>
      <div className="about__contact center">
        <a
          href="https://github.com/Jawad-Nazari"
          aria-label="github"
          target="_blank"
          rel="noreferrer"
          className="link link--icon"
        >
          <GitHubIcon />
        </a>
        <a
          href="mailto:Jawad.Nazari@outlook.com"
          target="_blank"
          rel="noreferrer"
          aria-label="mail"
          className="link link--icon"
        >
          <EmailIcon />
        </a>
        <a
          href="tel:+923140970147"
          target="_blank"
          rel="noreferrer"
          aria-label="phone"
          className="link link--icon"
        >
          <PhoneIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/jawad-nazari/"
          aria-label="linkedin"
          className="link link--icon"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://twitter.com/Nazari_Jawad58"
          aria-label="twitter"
          className="link link--icon"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon />
        </a>
      </div>

      <button
        type="button"
        className="btnResume"
        onClick={() => {
          window.open(
            'https://drive.google.com/file/d/1A1R_ij-SmCmElZYSd4_-Gk0Odk3Amsv_/view?usp=sharing',
          );
        }}
      >
        My Resume
      </button>
    </div>
    <Introduction />
    <section id="#skills">
      <Techstacks />
    </section>
  </>
);

export default About;
