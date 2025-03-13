
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
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <CalculatorsSection />
      
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
      <ContactSection />
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default Index;
