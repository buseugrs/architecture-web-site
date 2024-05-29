import React from 'react';

const SocialLinks = () => {
  return (
    <div className='social-container'>
      <ul className='social-links'>
        <li>
          <a href='#'>
            <i className='fa-brands fa-instagram' style={{ color: '#ffffff' }}></i>
          </a>
        </li>
        <li>
          <a href='#'>
            <i className='fa-brands fa-facebook-f' style={{ color: '#ffffff' }}></i>
          </a>
        </li>
        <li>
          <a href='#'>
            <i className='fa-brands fa-linkedin-in' style={{ color: '#ffffff' }}></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
