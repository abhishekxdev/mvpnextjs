'use client';

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecentWork from './components/RecentWork';
import WhyUs from './components/WhyUs';
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import MouseMoveEffect from './components/MouseMoveEffect';
import Services from './components/Services';

export default function App() {
  return (
    <div className="relative min-h-screen bg-gray-900">
      <div 
        className="fixed inset-0 w-screen h-screen bg-[url('/images/backart2.jpg')] bg-cover bg-center bg-no-repeat bg-fixed animate-fade-in opacity-10"
      />
      
      <div className="relative z-10">
        <MouseMoveEffect />
        <Navbar />
        <main>
          <Hero />
          <RecentWork />
          <WhyUs />
          <HowItWorks />
          <Services />
          <Portfolio />
          <Testimonials />
          <Pricing />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
}