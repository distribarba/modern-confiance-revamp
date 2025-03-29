
import { Wrench } from "lucide-react";
import ServiceLayout from "../components/ServiceLayout";
import ServiceIntro from "../components/services/ServiceIntro";

const ServiceManutencao = () => {
  const manutencaoImages = [
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  ];

  const introDescription = [
    "A Confiance oferece serviços completos de manutenção predial, atuando na conservação, operação e segurança de edificações residenciais, comerciais e industriais, prolongando a vida útil do seu patrimônio.",
    "Nossa equipe de profissionais qualificados realiza diagnósticos precisos e intervenções eficientes, garantindo o funcionamento adequado de todos os sistemas e estruturas do seu imóvel.",
    "Trabalhamos de forma preventiva e corretiva, minimizando a ocorrência de problemas e resolvendo com agilidade qualquer situação que possa surgir."
  ];

  return (
    <ServiceLayout 
      title="Manutenção Predial" 
      description="Serviços de engenharia voltados para conservação, operação, automação e segurança das edificações residenciais, comerciais ou industriais."
      backgroundImage="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    >
      <ServiceIntro 
        title="Manutenção eficiente para sua edificação"
        description={introDescription}
        images={manutencaoImages}
      />

      <div className="bg-gray-50 p-8 rounded-lg mb-16">
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-confiance-navy">Áreas de atuação:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold text-lg mb-2 text-confiance-navy">Sistemas elétricos</h4>
            <p className="text-gray-600">Instalação, manutenção e reparo de sistemas elétricos, garantindo eficiência e segurança.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold text-lg mb-2 text-confiance-navy">Sistemas hidráulicos</h4>
            <p className="text-gray-600">Serviços completos para redes hidráulicas, incluindo detecção e reparo de vazamentos.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold text-lg mb-2 text-confiance-navy">Alvenaria e pintura</h4>
            <p className="text-gray-600">Reparos estruturais, acabamentos e serviços de pintura para manter a estética e integridade do imóvel.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold text-lg mb-2 text-confiance-navy">Ar condicionado e refrigeração</h4>
            <p className="text-gray-600">Instalação, manutenção e limpeza de sistemas de climatização, garantindo conforto térmico.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold text-lg mb-2 text-confiance-navy">Automação predial</h4>
            <p className="text-gray-600">Implementação de sistemas modernos de automação para maior eficiência e controle.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold text-lg mb-2 text-confiance-navy">Sistemas de segurança</h4>
            <p className="text-gray-600">Instalação e manutenção de equipamentos de segurança, como câmeras e sistemas de controle de acesso.</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-confiance-navy text-center">Benefícios dos nossos serviços</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow flex">
            <div className="mr-4 text-confiance-green">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Redução de custos operacionais</h4>
              <p className="text-gray-600">A manutenção preventiva evita problemas maiores, gerando economia a longo prazo.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow flex">
            <div className="mr-4 text-confiance-green">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Aumento da vida útil do imóvel</h4>
              <p className="text-gray-600">Manutenção adequada preserva as estruturas e sistemas, prolongando sua durabilidade.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow flex">
            <div className="mr-4 text-confiance-green">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Maior segurança</h4>
              <p className="text-gray-600">Sistemas bem mantidos reduzem riscos de acidentes e garantem um ambiente mais seguro.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow flex">
            <div className="mr-4 text-confiance-green">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Valorização do patrimônio</h4>
              <p className="text-gray-600">Imóveis bem conservados mantêm e até aumentam seu valor de mercado.</p>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default ServiceManutencao;
