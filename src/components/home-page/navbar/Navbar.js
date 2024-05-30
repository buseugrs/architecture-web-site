import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar-container'>
      <Link to='/'>
        <img src={logo} alt='modernarc-architecture' />
      </Link>
      <div className={`hamburger-menu ${menuOpen ? 'hidden' : ''}`} onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>
      <div className={`links ${menuOpen ? 'open' : ''}`}>
        <div className='close-menu' onClick={toggleMenu}>
          &#x2715;
        </div>
        <ul className='link-list'>
          <li>
            <Link to='/'>Anasayfa</Link>
          </li>
          <li>
            <Link to='/about'>Hakkımızda</Link>
          </li>
          <li>
            <Link to='/services'>Hizmetler</Link>
          </li>
          <li>
            <Link to='/portfolio'>Portfolyo</Link>
          </li>
          <li>
            <Link to='/contact'>İletişim</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
