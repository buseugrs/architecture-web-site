import React from 'react';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import slider1 from '../../../../assets/slider-1.jpg';
import slider2 from '../../../../assets/slider-2.jpg';
import slider3 from '../../../../assets/slider-3.jpg';
import '@coreui/coreui/dist/css/coreui.min.css';

const Slider = () => {
  return (
    <div className='carousel-container'>
      <CCarousel controls transition='crossfade'>
        <CCarouselItem>
          <CImage className='d-block w-100 ' src={slider1} alt='slide 1' />
          <div className='overlay'></div>
        </CCarouselItem>
        <CCarouselItem>
          <CImage className='d-block w-100 ' src={slider2} alt='slide 2' />
          <div className='overlay'></div>
        </CCarouselItem>
        <CCarouselItem>
          <CImage className='d-block w-100 ' src={slider3} alt='slide 3' />
          <div className='overlay'></div>
        </CCarouselItem>
      </CCarousel>
    </div>
  );
};

export default Slider;
