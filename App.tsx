
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Referral from './components/Referral';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0A0A14] text-gray-300 font-sans antialiased overflow-x-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(circle_at_top,_rgba(61,139,255,0.25),_transparent_35%)]"></div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Pricing />
          <Referral />
          <HowItWorks />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
