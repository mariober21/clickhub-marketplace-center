
import React from 'react';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Home;
