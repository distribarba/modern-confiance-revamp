
import { CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
  const benefits = [
    "Profissionais altamente qualificados",
    "Soluções personalizadas para cada cliente",
    "Atendimento ágil e humanizado",
    "Presença em todo estado do Rio de Janeiro",
    "Compromisso com qualidade e excelência",
    "Experiência com empresas públicas e privadas"
  ];

  return (
    <section id="sobre" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-confiance-navy to-confiance-green rounded-lg blur opacity-20"></div>
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/1070bfa3-7b7b-40e4-8006-60811e1fd6d8.png" 
                  alt="Confiance Serviços Especializados" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 order-1 md:order-2 staggered-animation">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quem Somos</h2>
            <div className="h-1 w-20 bg-confiance-green mb-6"></div>
            <p className="text-lg text-gray-700 mb-6">
              A <span className="font-semibold">CONFIANCE SERVIÇOS ESPECIALIZADOS</span> está presente no estado do Rio de Janeiro atendendo a empresas públicas e privadas, através de soluções em Limpeza e Conservação, Manutenção Predial, Recursos Humanos e Mão de Obra Temporária.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Nosso compromisso é oferecer serviços de alta qualidade, com profissionais capacitados e processos eficientes, garantindo total satisfação aos nossos clientes.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-confiance-green mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <a href="#contato" className="button-secondary inline-block">
              Entre em Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
