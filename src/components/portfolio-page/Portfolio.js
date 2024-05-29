import React from 'react'
import slider1 from '../../assets/slider-1.jpg'
import ProjectGallery from '../project-gallery/ProjectGallery'

const Portfolio = () => {
  return (
<>
<div className='page-title'>
        <div className='title-image'>
          <img src={slider1} alt='modern-architecture about-us' />
          <div className='overlay'></div>
        </div>
      </div>
      <div className='gallery-container'>
        <ProjectGallery/>
      </div>
</>
  )
}

export default Portfolio