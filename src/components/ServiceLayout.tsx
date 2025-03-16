
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import WhatsappButton from "./WhatsappButton";
import { useEffect } from "react";
import { useIsMobile } from "../hooks/use-mobile";

interface ServiceLayoutProps {
  title: string;
  description: string;
  backgroundImage: string;
  children: React.ReactNode;
}

const ServiceLayout = ({ title, description, backgroundImage, children }: ServiceLayoutProps) => {
  // Add scroll to top effect when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isFixed={true} />
      
      <main className="flex-grow">
        <div 
          className="bg-confiance-navy py-16 md:py-24 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `linear-gradient(rgba(47, 46, 105, 0.85), rgba(47, 46, 105, 0.9)), url(${backgroundImage})` }}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Link 
                to="/#servicos" 
                className={`inline-flex items-center text-confiance-green hover:text-white transition-colors mb-6 ${isMobile ? 'mt-10' : ''}`}
              >
                <ArrowLeft size={16} className="mr-2" />
                Voltar para todos os serviços
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">{title}</h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">{description}</p>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 py-16">
          {children}
        </div>
        
        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="bg-white shadow-xl rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-confiance-navy">
                Pronto para transformar a gestão de serviços da sua empresa?
              </h2>
              <p className="text-lg mb-8 text-gray-600">
                Entre em contato agora mesmo e descubra como a Confiance pode otimizar seus processos e reduzir custos com soluções personalizadas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contato" 
                  className="bg-confiance-green text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 font-medium inline-flex items-center justify-center"
                >
                  Solicitar orçamento
                </a>
                <a 
                  href="tel:+552137288336" 
                  className="border border-confiance-navy text-confiance-navy px-8 py-3 rounded-md hover:bg-confiance-navy hover:text-white transition-all duration-300 font-medium inline-flex items-center justify-center"
                >
                  Ligar agora (21) 3728-8336
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default ServiceLayout;
