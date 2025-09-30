import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-secondary/95 backdrop-blur-sm z-50 py-4 border-b-0">
      <nav className="flex justify-between items-center max-w-6xl mx-auto px-4 md:px-8">
        <div className="nav-brand">
          <h2 className="text-primary text-2xl md:text-3xl font-bold">Magistral Turbo</h2>
        </div>
        <ul className="flex list-none gap-4 md:gap-8">
          <li>
            <a 
              href="#inicio" 
              className="text-white font-medium transition-colors duration-300 px-3 md:px-4 py-2 rounded-md hover:text-primary hover:bg-primary/10 text-sm md:text-base"
            >
              Inicio
            </a>
          </li>
          <li>
            <a 
              href="#contacto" 
              className="text-white font-medium transition-colors duration-300 px-3 md:px-4 py-2 rounded-md hover:text-primary hover:bg-primary/10 text-sm md:text-base"
            >
              Contacto
            </a>
          </li>
          <li>
            <a 
              href="https://www.mercadolibre.com.ar/pagina/sergiomagistralturbo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium transition-colors duration-300 px-3 md:px-4 py-2 rounded-md hover:text-primary hover:bg-primary/10 text-sm md:text-base"
            >
              Catalogo
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
