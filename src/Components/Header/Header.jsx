import React from 'react';
import Navbar from '../Navbar/Navbar';
import { ThemeContext } from '../../Context/theme';

import './Header.css';

const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  return (
    <>
      <div className="sticky-container">
        <header
          className={`header center ${themename}`}
        >
          <h4>
            <a href="#home" className="link">
              <span>Jawad Nazari</span>
            </a>
          </h4>
          <Navbar />
        </header>
      </div>
    </>
  );
};
export default Header;
