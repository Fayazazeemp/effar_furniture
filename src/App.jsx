import { HelmetProvider } from 'react-helmet-async';
import Seo from './components/Seo';
import Nav from './components/Nav';
import WaFloat from './components/WaFloat';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Catalogue from './components/Catalogue';
import Gallery from './components/Gallery';
import HowWeWork from './components/HowWeWork';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import WholesaleCta from './components/WholesaleCta';
import Brands from './components/Brands';
import ServiceArea from './components/ServiceArea';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Footer from './components/Footer';

export default function App() {
  return (
    <HelmetProvider>
      <Seo />
      <WaFloat />
      <Nav />
      <main id="main-content" itemScope itemType="https://schema.org/WebPage">
        <Hero />
        <Stats />
        <Catalogue />
        <Gallery />
        <HowWeWork />
        <WhyUs />
        <Testimonials />
        <WholesaleCta />
        <Brands />
        <ServiceArea />
        <Contact />
        <Faq />
      </main>
      <Footer />
    </HelmetProvider>
  );
}
