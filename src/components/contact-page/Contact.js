import React from 'react';
import slider1 from '../../assets/slider-1.jpg';
import Map from '../contact-page/Map.js';
import SocialLinks from '../home-page/hero-page/social-links/SocialLinks.js';

const Contact = () => {
  const position = [51.505, -0.09];
  return (
    <>
      <div className='page-title'>
        <div className='title-image'>
          <img src={slider1} alt='modern-architecture about-us' />
          <div className='overlay'></div>
          <h1>İletişim</h1>
        </div>
      </div>
      <div className='contact-forms'>
        <div className='contact-form'>
          <i className='fa-sharp fa-regular fa-envelope'></i>
          <h3>İletişim Formu</h3>
          <p>Bilgi için bizimle iletişime geçebilirisiniz.</p>
        </div>
        <div className='project-form'>
          <i className='fa-regular fa-building'></i>
          <h3>Proje Formu</h3>
          <p>Projeniz için fiyat teklifi alabilirsiniz.</p>
        </div>
        <div className='career-form'>
          <i className='fa-regular fa-clipboard'></i>
          <h3>Kariyer Formu</h3>
          <p>Ekibimize katılmak ister misiniz ?</p>
        </div>
      </div>
      <div className='contact-info'>
        <div className='contact-text'> 
          <h5>ModernArc Mimarlık</h5>
          <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, tempore. İstanbul</h6>
          <p>Tel: +90 212 369 45 54</p>
          <p> Fax:+90 212 369 45 54</p>
          <p>E-mail: info@loremipsum.com.tr</p>
          <SocialLinks />
        </div>
        <Map />
      </div>
    </>
  );
};

export default Contact;
