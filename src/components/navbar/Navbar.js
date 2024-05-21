import React from 'react';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='logo'>
        <img src={logo} alt='modernarc-architecture' />
      </div>
      <div className='links'>
        <ul className='link-list'>
          <li>
            <a href='#'>Anasayfa</a>
          </li>
          <li>
            <a href='#'>Hakkımızda</a>
          </li>
          <li>
            <a href='#'>Hizmetler</a>
          </li>
          <li>
            <a href='#'>Portfolyo</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
          <li>
            <a href='#'>İletişim</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
