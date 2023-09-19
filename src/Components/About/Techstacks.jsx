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
    <div className="section main">
      <h2 className="section__title different">Skills</h2>
      <div className="techsection">
        <div>
          <SiJavascript />
          <p>Javascript</p>
        </div>
        <div>
          <SiHtml5 />
          <p>HTML</p>
        </div>
        <div>
          <DiCss3 />
          <p>CSS</p>
        </div>
        <div>
          <BsBootstrap />
          <p>Bootstrap</p>
        </div>
        <div>
          <FaReact />
          <h5>React</h5>
        </div>
        <div>
          <SiRedux />
          <p>Redux</p>
        </div>
        <div>
          <DiRuby />
          <p>Ruby</p>
        </div>
        <div>
          <SiRubyonrails />
          <p>Rails</p>
        </div>
        <div>
          <VscGithub />
          <p>Github</p>
        </div>
        <div>
          <SiMysql />
          <p>mySQL</p>
        </div>
        <div>
          <SiPostgresql />
          <p>PostgreSQL</p>
        </div>
        <div>
          <GrVmware />
          <p>vmWare</p>
        </div>
      </div>
    </div>
  </>
);

export default Techstacks;
