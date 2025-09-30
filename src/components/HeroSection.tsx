import React from 'react';
import TurboSVG from './TurboSVG';

interface HeroSectionProps {
  scrollY: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollY }) => {
  return (
    <section 
      id="inicio" 
      className="min-h-screen bg-gradient-to-br from-secondary via-accent to-secondary flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 relative overflow-hidden gap-4"
    >
      <div className="flex-1 max-w-2xl z-10 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          Turbos de Alta Performance
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          Potencia tu motor con nuestros turbos de última generación
        </p>
        <a 
          href="#contacto"
          className="inline-block bg-gradient-to-r from-primary to-red-700 text-white border-none px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-full cursor-pointer transition-all duration-300 shadow-lg shadow-primary/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40 no-underline"
        >
          Contactar para Compra
        </a>
      </div>
      
      <TurboSVG scrollY={scrollY} />
    </section>
  );
};

export default HeroSection;
