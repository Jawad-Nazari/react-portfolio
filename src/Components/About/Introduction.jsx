import React from 'react';
import './Introduction.css';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { ThemeContext } from '../../Context/theme';
import profilePic from '../../assets/My profile pic.jpg';

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
              <h4>
                Hi, I&apos;m a full-stack developer with a passion for solving
                mysteries and overcoming challenges. My expertise lies in
                crafting exceptional web applications using JavaScript, React,
                Redux, Ruby on Rails, and PostgreSQL. I am passionate about
                creating top-notch products and continuously seek new
                challenges. My ultimate objective is to deliver web applications
                that offer an outstanding user experience. I collaborate closely
                with clients, translating their ideas into reality.
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Team Player
                {' '}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Continuous Learner
                {' '}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Problem Solver
                {' '}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Tech Enthusiast
                {' '}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
