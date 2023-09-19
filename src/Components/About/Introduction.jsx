import React from 'react';
import './Introduction.css';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { ThemeContext } from '../../Context/theme';
import profilePic from '../../assets/My profile pic.webp';

const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About
            <span className="different"> Me</span>
          </h2>
          <div className={`introduction ${themename}`}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <p>
                Hi, I&apos;m a full-stack developer with a passion for solving
                mysteries and overcoming challenges. My expertise lies in
                crafting exceptional web applications using JavaScript, React,
                Redux, Ruby on Rails, and PostgreSQL.  I am passionate about
                creating top-notch products and continuously seek new
                challenges. My ultimate objective is to deliver web applications
                that offer an outstanding user experience. I collaborate closely
                with clients, translating their ideas into reality.
              </p>
              <br />
              <p>Terms That can describe me apart form Coding :</p>
              <p className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Team Player
                {' '}
              </p>
              <p className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Continuous Learner
                {' '}
              </p>
              <p className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Problem Solver
                {' '}
              </p>
              <p className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Tech Enthusiast
                {' '}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
