import { Brush, Wrench, Shield, Users, FileCheck, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import WhatsappButton from '../components/WhatsappButton';

const AllServices = () => {
  const services = [
    {
      icon: <Users size={40} className="text-confiance-green" />,
      title: "Mão de Obra Qualificada",
      description: "Níveis Técnicos e Superiores - Nosso conceito de trabalho, aliado a profunda analise de Currículos, torna este setor um verdadeiro selecionador de talentos, onde cada profissional atenderá de imediato as exigências do cargo solicitado pelo cliente.",
      link: "/servicos/mao-de-obra-temporaria"
    },
    {
      icon: <Brush size={40} className="text-confiance-green" />,
      title: "Limpeza, Conservação e Copeiragem",
      description: "Asseguramos adequada orientação, quanto aos melhores procedimentos para manutenção e conservação das áreas estipuladas, e acompanhamento de uma Supervisão Atuante, colaborando assim com a qualidade e melhor produtividade de seus serviços, ambientes limpos e seguros.",
      link: "/servicos/limpeza-e-conservacao"
    },
    {
      icon: <Shield size={40} className="text-confiance-green" />,
      title: "Recepcionista, Porteiro e Vigias",
      description: "Destacamos nossa preparação rigorosa, para que tais serviços sejam realizados por pessoas qualificadas e treinadas, proporcionando maior comodidade e segurança nas operações de controle e técnica de atendimento ao público, que são essenciais nestas funções.",
      link: "/servicos/portaria-zeladoria-recepcao"
    },
    {
      icon: <FileCheck size={40} className="text-confiance-green" />,
      title: "Fiscalização de Serviços e Clientes",
      description: "Com orientação adequada em Relações Humanas no atendimento ao público, nossos fiscais de serviços, orientam e organizam funcionários no correto cumprimento do dever, em busca da satisfação do cliente.",
      link: "/servicos/fiscalizacao-servicos-clientes"
    },
    {
      icon: <Wrench size={40} className="text-confiance-green" />,
      title: "Manutenção Predial",
      description: "Equipes treinadas e com profissionais de alto gabarito com experiência e amplo conhecimento e formação nas áreas elétrica, hidráulica, construção civil, pintura e etc. Estes tendo ainda especializações em Brigada Contra Incêndio, Primeiros Socorros e Segurança do Trabalho.",
      link: "/servicos/manutencao-predial"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isFixed={true} />
      
      <main className="flex-grow">
        <div 
          className="bg-confiance-navy py-16 md:py-24 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `linear-gradient(rgba(47, 46, 105, 0.85), rgba(47, 46, 105, 0.9)), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)` }}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Link to="/#servicos" className="inline-flex items-center text-confiance-green hover:text-white transition-colors mb-6">
                <ArrowLeft size={16} className="mr-2" />
                Voltar para a página inicial
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Nossos Serviços</h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">Conheça todas as soluções que a Confiance oferece para sua empresa</p>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-confiance-navy mb-3">{service.title}</h2>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link 
                      to={service.link} 
                      className="text-confiance-green font-medium hover:text-confiance-navy transition-colors flex items-center gap-2 group"
                    >
                      Detalhes completos do serviço
                      <ArrowLeft size={16} className="rotate-180 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default AllServices;
