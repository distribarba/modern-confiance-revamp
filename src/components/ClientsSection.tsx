
import { useIsMobile } from '../hooks/use-mobile';
import TestimonialsCarousel from './TestimonialsCarousel';

const ClientsSection = () => {
  // Logos reais de clientes
  const clientLogos = [
    {
      name: "Nova Alameda Residencial",
      logo: "/lovable-uploads/d3d95d4f-b7d3-433c-a957-8c4b7d2f9f61.png"
    },
    {
      name: "Rossi Mais+ Jardim Imperial",
      logo: "/lovable-uploads/924a7bc9-ea91-4247-8035-bc7c24760eee.png"
    },
    {
      name: "Rio Prefeitura - Fazenda e Planejamento",
      logo: "/lovable-uploads/c851a8cc-ea6b-465d-9ca4-57c6430a1ee2.png"
    },
    {
      name: "SECTI",
      logo: "/lovable-uploads/8bb3b941-f955-4e57-a5e3-268e8a91a164.png"
    },
    {
      name: "PRODERJ",
      logo: "/lovable-uploads/6efda96d-6068-4f3c-86a6-2faadd5746d5.png"
    },
    {
      name: "ANTT",
      logo: "/lovable-uploads/a854899d-a164-42d8-aae6-305417d21314.png"
    },
    {
      name: "Casa França-Brasil",
      logo: "/lovable-uploads/629b5e90-4444-4c88-9232-e61cbeca5a54.png"
    },
    {
      name: "Residencial Gênesis",
      logo: "/lovable-uploads/e60b3383-4c38-4c5d-954a-c1fc30d71d2e.png"
    }
  ];

  // Depoimentos de clientes
  const testimonials = [
    {
      text: "A Confiance tem sido uma parceira fundamental para nossa empresa. Os serviços de limpeza e conservação são de excelente qualidade, com equipe bem treinada e dedicada.",
      author: "Maria Silva",
      position: "Gerente Administrativo",
      company: "Empresa ABC"
    },
    {
      text: "Contratamos os serviços de portaria e recepção da Confiance há mais de 3 anos e estamos extremamente satisfeitos. Profissionais impecáveis e atendimento personalizado.",
      author: "João Oliveira",
      position: "Diretor Operacional",
      company: "Condomínio XYZ"
    },
    {
      text: "A manutenção predial realizada pela Confiance é exemplar. Equipe técnica qualificada, respostas rápidas e soluções eficientes para todos os nossos problemas.",
      author: "Ana Beatriz",
      position: "Síndica",
      company: "Edifício Delta"
    }
  ];

  const isMobile = useIsMobile();

  return (
    <section id="clientes" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 staggered-animation">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Clientes</h2>
          <div className="h-1 w-20 bg-confiance-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Atendemos com excelência diversas empresas e organizações em todo o estado do Rio de Janeiro.
          </p>
        </div>
        
        {/* Logos de clientes */}
        <div className={`grid ${isMobile ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4'} gap-8 mb-20`}>
          {clientLogos.map((client, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-6 md:p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-h-24 md:max-h-28 w-auto object-contain"
              />
            </div>
          ))}
        </div>
        
        {/* Testimonials Carousel */}
        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  );
};

export default ClientsSection;
