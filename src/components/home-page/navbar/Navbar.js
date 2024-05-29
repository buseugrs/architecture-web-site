import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';

const Navbar = () => {
  return (
    <div className='navbar-container'>
       <Link to='/'>
          <img src={logo} alt='modernarc-architecture' />
        </Link>
      <div className='links'>
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
