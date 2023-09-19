import React from 'react';
import Navbar from '../Navbar/Navbar';
import { ThemeContext } from '../../Context/theme';
import Image from '../../assets/J-N-T.png';

import './Header.css';

const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={`header center ${themename}`}>
        <h4>
          <a href="#home" className="link">
            <span>
              <img src={Image} alt="logo" />
              Jawad
              <span className="nazari"> Nazari</span>
            </span>
          </a>
        </h4>
        <Navbar />
      </header>
    </>
  );
};
export default Header;
