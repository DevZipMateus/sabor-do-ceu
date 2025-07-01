
import Header from '@/components/layout/SaborHeader';
import Hero from '@/components/sections/SaborHero';
import About from '@/components/sections/SaborAbout';
import Services from '@/components/sections/SaborServices';
import Testimonials from '@/components/sections/SaborTestimonials';
import Location from '@/components/sections/SaborLocation';
import Contact from '@/components/sections/SaborContact';
import Footer from '@/components/layout/SaborFooter';
import WhatsAppFloat from '@/components/ui/SaborWhatsAppFloat';

const SaborDoCeu = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default SaborDoCeu;
