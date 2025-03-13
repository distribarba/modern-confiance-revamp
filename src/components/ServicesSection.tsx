
import { Brush, Wrench, Shield, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Brush size={40} className="text-confiance-green" />,
    title: "Limpeza e Conservação",
    description: "Soluções completas de limpeza, paisagismo e coperagem, além de serviços relacionados a coletas seletivas de resíduos.",
    link: "/servicos/limpeza-e-conservacao"
  },
  {
    icon: <Wrench size={40} className="text-confiance-green" />,
    title: "Manutenção Predial",
    description: "Serviços de engenharia voltados para conservação, operação, automação e segurança das edificações residenciais, comerciais ou industriais.",
    link: "/servicos/manutencao-predial"
  },
  {
    icon: <Shield size={40} className="text-confiance-green" />,
    title: "Portaria, Zeladoria e Recepção",
    description: "Serviços essenciais para manter a boa imagem de uma empresa, indústria ou condomínio.",
    link: "/servicos/portaria-zeladoria-recepcao"
  },
  {
    icon: <Users size={40} className="text-confiance-green" />,
    title: "Mão de Obra Temporária",
    description: "Atendimento às demandas sazonais em Facilities ou Recursos Humanos, com extenso e diversificado banco de talentos.",
    link: "/servicos/mao-de-obra-temporaria"
  }
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 staggered-animation">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços Especializados</h2>
          <div className="h-1 w-20 bg-confiance-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Oferecemos soluções completas em terceirização para sua empresa, com profissionais qualificados e suporte personalizado.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 staggered-animation">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-white hover:shadow-xl transition-shadow duration-300 rounded-lg p-6 flex flex-col h-full">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-confiance-navy">{service.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
              <Link 
                to={service.link} 
                className="text-confiance-green font-medium hover:text-confiance-navy transition-colors flex items-center gap-2 mt-auto group"
              >
                Saiba mais
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
