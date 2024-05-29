import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/home-page/navbar/Navbar';
import Home from './components/home-page/Home';
import About from './components/about-page/About';
import Services from './components/services-page/Services';
import Portfolio from './components/portfolio-page/Portfolio';
import Contact from './components/contact-page/Contact';
import Footer from './components/home-page/footer/Footer';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services/>}/>
          <Route path='portfolio' element={<Portfolio/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
