import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contacto" className="py-20 px-4 md:px-8 bg-secondary text-white text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl mb-4 text-primary font-bold">
          Contacto
        </h2>
        <p className="text-lg md:text-xl mb-2 text-gray-300">
          Envia mensaje por whatsapp para comprar su turbo
        </p>
        <p className="text-sm md:text-base mb-8 text-gray-400 italic">
          (Descuento en efectivo, o comprando por mensaje de whatsapp)
        </p>
        <div className="flex flex-col items-center gap-6">
          <p className="text-lg md:text-xl font-medium flex items-center justify-center gap-2">
            <svg className="w-6 h-6 fill-green-500" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            Whatsapp: +54 9 11 6377-9306
          </p>
          <p className="text-lg md:text-xl font-medium flex items-center justify-center gap-2">
            <svg className="w-6 h-6 fill-red-500" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            Dirección: Lavalle & Billinghurst, Almagro
          </p>
          
          <div className="mt-4 text-center">
            <p className="text-sm md:text-base text-gray-300 mb-4">
              o compra directamente desde mercado libre:
            </p>
            <a 
              href="https://www.mercadolibre.com.ar/pagina/sergiomagistralturbo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-primary to-red-700 text-white font-bold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-full cursor-pointer transition-all duration-300 shadow-lg shadow-primary/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40 no-underline"
            >
              Comprar por Mercado Libre
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
