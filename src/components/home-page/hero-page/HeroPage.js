import Navbar from '../navbar/Navbar';
import Slider from './slider/Slider';
import SocialLinks from './social-links/SocialLinks';

const HeroPage = () => {
  return (
    <div className='hero-container'>
      <Slider />
      <SocialLinks />
    </div>
  );
};

export default HeroPage;
