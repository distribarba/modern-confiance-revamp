import { useEffect, useState } from 'react';

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

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-20">
          {clientLogos.map((client, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-h-16 object-contain"
              />
            </div>
          ))}
        </div>
        
        {/* Depoimentos */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-confiance-navy to-confiance-green"></div>
          <div className="flex flex-col items-center text-center">
            <div className="text-5xl text-confiance-green mb-6">"</div>
            
            <div className="transition-all duration-500" style={{ opacity: 1 }}>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                {testimonials[currentTestimonial].text}
              </p>
              
              <div>
                <p className="font-semibold text-confiance-navy">
                  {testimonials[currentTestimonial].author}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonials[currentTestimonial].position}, {testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>
            
            <div className="flex mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-confiance-green scale-125' : 'bg-gray-300'
                  }`}
                  aria-label={`Ver depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
