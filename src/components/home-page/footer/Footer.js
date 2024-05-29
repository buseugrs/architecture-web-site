import React from 'react';
import ProjectIcon from '../../../assets/project-icon.png'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='form'>
        <div className='form-icon'>
          <img src={ProjectIcon} alt='' width={80} />
        </div>
        <div className='form-text'>
          <p>Proje fikirleriniz için buradayız.</p>
          <p>Sizlerle tanışabilmemiz için bizimle iletişime geçmeniz yeterli. </p>
        </div>
        <div className='button'>
          <button className='form-btn'>Proje Formu </button>
        </div>
      </div>
      <div className='copy-right'>
        <div className='copy-right-text'></div>
      ModernArc Mimarlık © 2024 Tüm hakları saklıdır.
      </div>
    </div>
  );
};

export default Footer;
