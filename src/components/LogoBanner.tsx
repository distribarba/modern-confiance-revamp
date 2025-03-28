
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

  // Animation duration: 20s for mobile, 30s for desktop
  const animationDuration = isMobile ? 20 : 30;
  return <section className={`w-full py-8 overflow-hidden relative ${image ? 'bg-cover bg-center' : 'bg-gray-50'}`} style={image ? {
    backgroundImage: `url(${image})`
  } : {}}>
      {image && <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>}
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
      </div>

      <div className="relative z-10">
        <div className="logos-scroll-animation flex">
          {duplicatedLogos.map((logo, index) => <div key={index} style={{
          width: '180px',
          height: '140px'
        }} className="flex-shrink-0 mx-3 md:mx-5 bg-white p-4 rounded-lg shadow-sm flex items-center justify-center px-[12px]">
              <img src={logo.src} alt={logo.alt} className="max-h-16 md:max-h-20 w-auto object-contain" />
            </div>)}
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
    </section>;
};
export default LogoBanner;
