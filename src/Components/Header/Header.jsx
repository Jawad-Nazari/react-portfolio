import React from 'react';
import Navbar from '../Navbar/Navbar';
import { ThemeContext } from '../../Context/theme';
import logo from '../../assets/J-N-T.png';

import './Header.css';

const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  return (
    <>
      <div className="sticky-container">
        <header className={`header center ${themename}`}>
          <h4>
            <img src={logo} alt="J-N" />
            <a href="#home" className="link">
              <span>Jawad</span>
              <span className="nazari"> Nazari</span>
            </a>
          </h4>
          <Navbar />
        </header>
      </div>
    </>
  );
};
export default Header;
