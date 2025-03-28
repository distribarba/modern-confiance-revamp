
import { ArrowRight, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="inicio" className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-confiance-light to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 staggered-animation">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Serviços Especializados com <span className="gradient-text">Excelência</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Soluções completas em terceirização de serviços com qualidade que sua empresa merece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#servicos" className="button-primary flex items-center justify-center gap-2">
                Conheça Nossos Serviços <ArrowRight size={18} />
              </a>
              <a href="#contato" className="button-outline flex items-center justify-center gap-2">
                <Phone size={18} /> (21) 3728-8336
              </a>
            </div>
            <div className="mt-10 flex items-center">
              <div className="flex -space-x-2">
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  alt="Cliente satisfeito" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  alt="Cliente satisfeito" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  alt="Cliente satisfeito" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                  alt="Cliente satisfeito" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              </div>
              <p className="ml-4 text-sm text-gray-600">
                + de <span className="font-bold text-confiance-navy">100 clientes</span> satisfeitos
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-confiance-navy to-confiance-green rounded-lg blur opacity-20"></div>
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" 
                  alt="Confiance Serviços" 
                  className="w-full h-auto object-cover rounded-lg animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
