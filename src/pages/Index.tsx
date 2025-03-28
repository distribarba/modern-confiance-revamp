
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import BenefitsSection from "../components/BenefitsSection";
import CalculatorsSection from "../components/CalculatorsSection";
import AboutSection from "../components/AboutSection";
import ClientsSection from "../components/ClientsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";
import YouTubeVideo from "../components/YouTubeVideo";
import FAQSection from "../components/FAQSection";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  // Add scroll to top effect when the page loads
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    // If there's no hash in the URL, scroll to top
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <CalculatorsSection />
      
      {/* Seção de Vídeo */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 staggered-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Confira Nosso Trabalho</h2>
            <div className="h-1 w-20 bg-confiance-green mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              Veja como a Confiance transforma ambientes e oferece serviços de excelência.
            </p>
          </div>
          <div className="max-w-sm mx-auto">
            <YouTubeVideo videoId="vJq7P_Ubym0" title="Confiance Serviços Especializados" />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-confiance-navy text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Transforme a gestão de serviços da sua empresa
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-200">
            Entre em contato agora mesmo e descubra como a Confiance pode otimizar seus processos e reduzir custos com soluções personalizadas.
          </p>
          <a 
            href="#contato" 
            className="bg-confiance-green text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 font-medium inline-flex items-center"
          >
            Solicite um orçamento <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </section>
      
      <AboutSection />
      <ClientsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default Index;
