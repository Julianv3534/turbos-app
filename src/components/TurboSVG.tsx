import React from 'react';

interface TurboSVGProps {
  scrollY: number;
}

const TurboSVG: React.FC<TurboSVGProps> = ({ scrollY }) => {
  return (
    <div 
      className="flex-1 flex justify-center items-center relative mt-4 lg:mt-0"
      style={{ 
        transform: `translateY(${scrollY * 0.3}px) rotateY(${scrollY * 0.08}deg)`,
        opacity: Math.max(1 - scrollY / 1000, 0.3)
      }}
    >
      <div className="w-72 h-72 md:w-96 md:h-96 relative">
        {/* Turbo Image */}
        <img 
          src="/turbo.png" 
          alt="High Performance Turbocharger"
          className="w-full h-full object-contain filter drop-shadow-2xl"
          style={{
            animation: `float 4s ease-in-out infinite`,
            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))',
            transform: `rotate(${scrollY * 0.02}deg)`
          }}
        />
        
        {/* Subtle glow effect */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3), transparent 70%)',
            filter: 'blur(40px)',
            animation: `glow 3s ease-in-out infinite alternate`
          }}
        />
      </div>
      
      <style>
        {`
          @keyframes float {
            0%, 100% { 
              transform: translateY(0px);
            }
            50% { 
              transform: translateY(-8px);
            }
          }
          
          @keyframes glow {
            0% { 
              opacity: 0.15;
              transform: scale(1);
            }
            100% { 
              opacity: 0.25;
              transform: scale(1.02);
            }
          }
        `}
      </style>
    </div>
  );
};

export default TurboSVG;
