import React from 'react';
import Navbar from '../Navbar/Navbar';
import { ThemeContext } from '../../Context/theme';
import Image from '../../assets/logo.webp';

import './Header.css';

const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={`header center ${themename}`}>
        <h4>
          <a href="#home" className="link">
            <span>
              <img src={Image} alt="logo" width="30" height="30" />
              Jawad Nazari
            </span>
          </a>
        </h4>
        <Navbar />
      </header>
    </>
  );
};
export default Header;
