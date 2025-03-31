
import React, { useEffect, useRef } from 'react';
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
  const scrollRef = useRef<HTMLDivElement>(null);

  // Duplicamos os logos mais vezes para garantir uma animação contínua sem pausas
  const duplicatedLogos = [...logos, ...logos, ...logos];
  
  // Velocidade ajustada: mais rápido para mobile, mais lento para desktop
  const animationDuration = isMobile ? 20 : 30;
  
  // Função para garantir que a animação reinicie suavemente
  useEffect(() => {
    const handleAnimationEnd = () => {
      if (scrollRef.current) {
        // Reset suave: voltamos para a posição inicial sem animação
        scrollRef.current.style.animation = 'none';
        scrollRef.current.offsetHeight; // Trigger reflow
        // Reiniciamos a animação
        scrollRef.current.style.animation = `scroll ${animationDuration}s linear infinite`;
      }
    };

    const element = scrollRef.current;
    if (element) {
      element.addEventListener('animationiteration', handleAnimationEnd);
      return () => {
        element.removeEventListener('animationiteration', handleAnimationEnd);
      };
    }
  }, [animationDuration]);
  
  return (
    <section className={`w-full py-8 overflow-hidden relative ${image ? 'bg-cover bg-center' : 'bg-gray-50'}`} 
      style={image ? { backgroundImage: `url(${image})` } : {}}
    >
      {image && <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>}
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
      </div>

      <div className="relative z-10">
        {/* Máscaras de transparência nas laterais com cores adaptáveis */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        
        <div 
          ref={scrollRef}
          className="logos-scroll-animation flex"
        >
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={index} 
              style={{
                minWidth: isMobile ? '120px' : '140px',
                height: isMobile ? '120px' : '140px'
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
              transform: translateX(-${(100 / 3) * 2}%);
            }
          }
          
          .logos-scroll-animation {
            animation: scroll ${animationDuration}s linear infinite;
            width: max-content;
          }
        `}
      </style>
    </section>
  );
};

export default LogoBanner;
