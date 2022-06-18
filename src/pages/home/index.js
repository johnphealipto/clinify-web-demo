import HeroSection from './components/HeroSection';
import ChooseUs from './components/ChooseUs';
import SolutionSection from './components/SolutionSection';
import Footer from '../../components/Footer';
import ContactUs from './components/ContactUs';
import About from './components/About';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <About />
      <ChooseUs />
      <SolutionSection />
      <ContactUs />
      <Footer />
    </>
  )
}

export default HomePage;