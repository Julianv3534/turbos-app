import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl text-secondary mb-12 font-bold">
          Nuestros Productos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-primary text-2xl mb-4 font-semibold">
              Turbos Garrett
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Tecnología líder en el mercado para máximo rendimiento
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-primary text-2xl mb-4 font-semibold">
              Turbos Precision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Precisión y durabilidad para aplicaciones de competición
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-primary text-2xl mb-4 font-semibold">
              Turbos BorgWarner
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Innovación y eficiencia para uso diario y deportivo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
