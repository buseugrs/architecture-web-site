import './App.scss';
import HeroPage from './components/hero-page/HeroPage';
import Services from './components/services/Services';
import ProjectGallery from './components/project-gallery/ProjectGallery';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div>
      <HeroPage />
      <Services/>
      <ProjectGallery/>
      <Footer/>
    </div>
  );
}

export default App;
