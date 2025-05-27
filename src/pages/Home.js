import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import HeroText from '../components/Hero_text';
import Trophy from '../components/Trophy';

const Home = () => {
  return (
    <div>
      <Header />
      <HeroText />
      <Trophy />
      <HeroSection />

      <Testimonials />
      
      <Footer />
    </div>
  );
};

export default Home;