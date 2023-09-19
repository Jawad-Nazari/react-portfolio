import React from 'react';
import './Techstacks.css';
import { GrVmware } from 'react-icons/gr';
import { FaReact } from 'react-icons/fa';
import {
  SiHtml5,
  SiJavascript,
  SiRubyonrails,
  SiPostgresql,
  SiRedux,
  SiMysql,
} from 'react-icons/si';
import { DiCss3, DiRuby } from 'react-icons/di';

import { VscGithub } from 'react-icons/vsc';
import { BsBootstrap } from 'react-icons/bs';

const Techstacks = () => (
  <>
    <div className="section main" data-aos="fade-right">
      <h2 className="section__title different">Skills</h2>
      <div className="techsection">
        <div>
          <SiJavascript />
          <h5>Javascript</h5>
        </div>
        <div>
          <SiHtml5 />
          <h5>HTML</h5>
        </div>
        <div>
          <DiCss3 />
          <h5>CSS</h5>
        </div>
        <div>
          <BsBootstrap />
          <h5>Bootstrap</h5>
        </div>
        <div>
          <FaReact />
          <h5>React</h5>
        </div>
        <div>
          <SiRedux />
          <h5>Redux</h5>
        </div>
        <div>
          <DiRuby />
          <h5>Ruby</h5>
        </div>
        <div>
          <SiRubyonrails />
          <h5>Rails</h5>
        </div>
        <div>
          <VscGithub />
          <h5>Github</h5>
        </div>
        <div>
          <SiMysql />
          <h5>mySQL</h5>
        </div>
        <div>
          <SiPostgresql />
          <h5>PostgreSQL</h5>
        </div>
        <div>
          <GrVmware />
          <h5>vmWare</h5>
        </div>
      </div>
    </div>
  </>
);

export default Techstacks;
