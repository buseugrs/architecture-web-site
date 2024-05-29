import React from 'react';
import ServicesBlock from '../services-block/ServicesBlock';
import slider1 from '../../assets/slider-1.jpg';
import officeService from '../../assets/services/office-service.jpg';
import homeService from '../../assets/services/home-service.jpg';
import shopService from '../../assets/services/shop-service.jpg';
import restaurantService from '../../assets/services/restaurant-service.jpg';
import otelService from '../../assets/services/otel-service.jpg';
import atelierService from '../../assets/services/atelier-service.jpg';

const Services = () => {
  return (
    <>
      <div className='page-title'>
        <div className='title-image'>
          <img src={slider1} alt='modern-architecture about-us' />
          <div className='overlay'></div>
          <h1>Hizmetler</h1>
        </div>
      </div>
      <div className='services-block-container'>
        <div className='services-block'>
          <div className='service-box'>
            <img className='service-img' src={officeService} alt='office-design' />
            <h2>Ofis</h2>
          </div>
          <div className='service-box'>
            <img className='service-img' src={homeService} alt='home-design' />
            <h2>Ev</h2>
          </div>
          <div className='service-box'>
            <img className='service-img' src={shopService} alt='shop-design' />
            <h2>Mağaza</h2>
          </div>
          <ServicesBlock />
          <div className='service-box'>
            <img className='service-img' src={restaurantService} alt='restaurant-design' />
            <h2>Restoran</h2>
          </div>
          <div className='service-box'>
            <img className='service-img' src={otelService} alt='otel-design' />
            <h2>Otel</h2>
          </div>
          <div className='service-box'>
            <img className='service-img' src={atelierService} alt='atelier-design' />
            <h2>Atölye</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
