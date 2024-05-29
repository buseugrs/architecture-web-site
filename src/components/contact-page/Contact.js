import React from 'react'
import slider1 from '../../assets/slider-1.jpg';
const Contact = () => {
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
    <i class="fa-sharp fa-regular fa-envelope"></i>
    <h3>İletişim Formu</h3>
    <p>Bilgi için bizimle iletişime geçebilirisiniz.</p>
    </div>
    <div className='project-form'>
    <i class="fa-regular fa-building"></i>
    <h3>Proje Formu</h3>
    <p>Projeniz için fiyat teklifi alabilirsiniz.</p>
    </div>
    <div className='career-form'>
    <i class="fa-regular fa-clipboard"></i>
    <h3>Kariyer Formu</h3>
    <p>Ekibimize katılmak ister misiniz ?</p>
    </div>
  </div>
  <div className='contact-info'>
    <div className='contact-text'></div>
    <div className='google-map'></div>
  </div>
    </>
    
  )
}

export default Contact