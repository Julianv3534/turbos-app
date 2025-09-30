import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ContactSection from './components/ContactSection';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-accent to-secondary">
      <Header />
      <main>
        <div className="pt-20">
          <HeroSection scrollY={scrollY} />
        </div>
        <FeaturesSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
