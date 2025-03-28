
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

interface LogoBannerProps {
  logos: Array<{
    src: string;
    alt: string;
  }>;
  image?: string; // Optional background image
}

const LogoBanner = ({
  logos,
  image
}: LogoBannerProps) => {
  const isMobile = useIsMobile();

  // We duplicate the logos to create a seamless infinite scroll effect
  const duplicatedLogos = [...logos, ...logos];

  // Animation duration: Aumentando a velocidade: 12s para mobile, 18s para desktop
  const animationDuration = isMobile ? 12 : 18;
  
  return (
    <section className={`w-full py-8 overflow-hidden relative ${image ? 'bg-cover bg-center' : 'bg-gray-50'}`} 
      style={image ? { backgroundImage: `url(${image})` } : {}}
    >
      {image && <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>}
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
      </div>

      <div className="relative z-10">
        {/* Adicionando máscaras de transparência nas laterais */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        
        <div className="logos-scroll-animation flex">
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={index} 
              style={{
                width: '140px',  // Reduzindo largura para formato mais quadrado
                height: '140px'  // Mantendo altura para formato quadrado
              }} 
              className="flex-shrink-0 mx-2 md:mx-3 bg-white p-4 rounded-lg shadow-sm flex items-center justify-center"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="max-h-16 md:max-h-20 w-auto object-contain" 
              />
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .logos-scroll-animation {
            animation: scroll ${animationDuration}s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default LogoBanner;
