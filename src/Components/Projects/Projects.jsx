import React from 'react';
import './Projects.css';
import { FaReact } from 'react-icons/fa';
import { BiSolidFileCss } from 'react-icons/bi';
import { SiHtml5 } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';

const Projects = () => (
  <>
    <div className="section">
      <h2 className="section__title different">Projects</h2>
      <div className="projects_container">
        <div className="project">
          <div className="project_videocontainer">
            <div>
              <img
                src="https://i.ibb.co/sVjzsn2/CCTA.jpg"
                alt="Crypto Currency Tracker project screenshot"
              />
            </div>
          </div>
          <div className="project_information">
            <h2>Crypto Currency Tracker</h2>
            <p>
              CCTA is a single-page application where you can find information
              about papular cryptocurrencies. The application fetches the
              cryptocurrencis information from the API and displays it in the
              home page.
            </p>
            <div>
              <FaReact title="React" />
              <BiSolidFileCss title="CSS" />
              <SiHtml5 title="HTML5" />
              <IoLogoJavascript title="JavaScript" />
            </div>
            <div>
              <a
                href="https://jawad-cryptoapp.onrender.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span type="button" className="btn btn--outline onbt">
                  See this Live
                </span>
              </a>
              <a
                href="https://github.com/Jawad-Nazari/Metrics-webapp"
                target="_blank"
                rel="noreferrer"
              >
                <span type="button" className="btn btn--outline">
                  View Code
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="projects_container">
        <div className="project">
          <div className="project_videocontainer">
            <div>
              <img
                src="https://i.ibb.co/kJbFDWV/Bookstore-react.jpg"
                alt="Bookstore react project screenshot"
              />
            </div>
          </div>
          <div className="project_information">
            <h2>Bookstore</h2>
            <p>
              The Bookstore is a web application that allows users to display a
              list of books, add and remove a book. Users can view a list of
              books on the homepage of the application. Each book item displays
              information such as the book title, author, and category.
            </p>
            <div>
              <FaReact title="React" />
              <BiSolidFileCss title="CSS" />
              <SiHtml5 title="HTML5" />
              <IoLogoJavascript title="JavaScript" />
            </div>
            <div>
              <a
                href="https://bookstore-jpu9.onrender.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span type="button" className="btn btn--outline onbt">
                  See this Live
                </span>
              </a>
              <a
                href="https://github.com/Jawad-Nazari/bookstore"
                target="_blank"
                rel="noreferrer"
              >
                <span type="button" className="btn btn--outline">
                  View Code
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="projects_container">
        <div className="project">
          <div className="project_videocontainer">
            <div>
              <img
                src="https://i.ibb.co/rfp4yFQ/Math-Magicians.jpg"
                alt="Math-Magicians Project screenshot"
              />
            </div>
          </div>
          <div className="project_information">
            <h2>Math-Magicians </h2>
            <p>
              Math Magicians is a Single Page App website that allows users to
              perform basic mathematical calculations, including addition,
              subtraction, multiplication, and division.This website also
              includes a random math fact feature that displays a fun and
              interesting mathematical fact.
            </p>
            <div>
              <FaReact title="React" />
              <BiSolidFileCss title="CSS" />
              <SiHtml5 title="HTML5" />
              <IoLogoJavascript title="JavaScript" />
            </div>
            <div>
              <a
                href="https://math-magicians-jawad-nazari.onrender.com/calculator/"
                target="_blank"
                rel="noreferrer"
              >
                <span type="button" className="btn btn--outline onbt">
                  See this live
                </span>
              </a>
              <a
                href="https://github.com/Jawad-Nazari/Math-Magicians"
                target="_blank"
                rel="noreferrer"
              >
                <span type="button" className="btn btn--outline">
                  View Code
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="projects_container">
        <div className="project">
          <div className="project_videocontainer">
            <div>
              <img
                src="https://i.ibb.co/5xSc0BD/Speakers-Capestone.jpg"
                alt="Web Development"
              />
            </div>
          </div>
          <div className="project_information">
            <h2>Web Development</h2>
            <p>
              This is my first capstone project at Microverse, where I have
              built a website that showcases different bootcamps and courses
              like Graphic Design course.The website is built using HTML, CSS
              and JavaScript technologies.
            </p>
            <div>
              <BiSolidFileCss title="CSS" />
              <SiHtml5 title="HTML5" />
              <IoLogoJavascript title="JavaScript" />
            </div>
            <div>
              <a
                href="https://jawad-nazari.github.io/Capstone-Project/index.html"
                target="_blank"
                rel="noreferrer"
              >
                <span type="button" className="btn btn--outline onbt">
                  See this Live
                </span>
              </a>
              <a
                href="https://github.com/Jawad-Nazari/Capstone-Project"
                target="_blank"
                rel="noreferrer"
              >
                <span type="button" className="btn btn--outline">
                  View Code
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="projects_container">
        <div className="project">
          <div className="project_videocontainer">
            <div>
              <img
                src="https://i.ibb.co/9sw4Vf1/Space-Traveler.jpg"
                alt="Space Travelers Hub project screenshot"
              />
            </div>
          </div>
          <div className="project_information">
            <h2>Space Traveler</h2>
            <p>
              This is a basic Web webiste that displays the list of Rockets and
              Missions so that user can reserve a particular Rocket and Mission
              and add them into My Proflie section. The application is build by
              React and Redux toolkit.
            </p>
            <div>
              <FaReact title="React" />
              <BiSolidFileCss title="CSS" />
              <SiHtml5 title="HTML5" />
              <IoLogoJavascript title="JavaScript" />
            </div>
            <div>
              <a
                href="https://space-travelers-hub-pcqh.onrender.com/rockets"
                target="_blank"
                rel="noreferrer"
              >
                <span type="button" className="btn btn--outline onbt">
                  See this Live
                </span>
              </a>
              <a
                href="https://github.com/osmanwako/space_travelers_hub"
                target="_blank"
                rel="noreferrer"
              >
                <span type="button" className="btn btn--outline">
                  View Code
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
export default Projects;
