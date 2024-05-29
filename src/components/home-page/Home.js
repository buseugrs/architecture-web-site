import React from 'react'
import HeroPage from './hero-page/HeroPage'
import ProjectGallery from '../project-gallery/ProjectGallery'
import ServicesBlock from '../services-block/ServicesBlock'

const Home = () => {
  return (
   <>
   <HeroPage/>
   <ServicesBlock/>
   <ProjectGallery/>
   </>
  )
}

export default Home