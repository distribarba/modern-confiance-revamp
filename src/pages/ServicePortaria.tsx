
import { Shield } from "lucide-react";
import ServiceLayout from "../components/ServiceLayout";

const ServicePortaria = () => {
  return (
    <ServiceLayout 
      title="Portaria, Zeladoria e Recepção" 
      description="Serviços essenciais para manter a boa imagem de uma empresa, indústria ou condomínio."
      backgroundImage="/lovable-uploads/80ffe772-5484-4688-9345-791645d8301a.png"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-confiance-navy">Segurança e excelência no atendimento</h2>
          <p className="text-gray-600 mb-4">
            A Confiance oferece serviços completos de portaria, zeladoria e recepção, garantindo o controle de acesso, segurança e uma excelente primeira impressão para visitantes e colaboradores.
          </p>
          <p className="text-gray-600 mb-4">
            Nossos profissionais são rigorosamente selecionados e treinados para atuar com eficiência, cortesia e atenção aos detalhes, representando adequadamente a imagem da sua empresa ou condomínio.
          </p>
          <p className="text-gray-600">
            Oferecemos soluções personalizadas que se adaptam às necessidades específicas de cada cliente, seja em ambientes corporativos, industriais ou residenciais.
          </p>
        </div>
        <div>
          <img 
            src="/lovable-uploads/000b17b9-e57a-4f25-b47c-ebccbc05f2e7.png" 
            alt="Serviço de portaria e recepção" 
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-16">
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-confiance-navy">Nossos serviços incluem:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold text-lg mb-2 text-confiance-navy">Portaria</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Controle de acesso de pessoas e veículos</span>
              </li>
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Registro de visitantes</span>
              </li>
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Orientação e direcionamento de visitantes</span>
              </li>
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Monitoramento de sistemas de segurança</span>
              </li>
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Controle de chaves</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold text-lg mb-2 text-confiance-navy">Zeladoria</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Supervisão de serviços de limpeza</span>
              </li>
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Inspeção de áreas comuns</span>
              </li>
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Identificação de necessidades de manutenção</span>
              </li>
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Pequenos reparos</span>
              </li>
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Gestão de prestadores de serviço</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold text-lg mb-2 text-confiance-navy">Recepção</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Atendimento a visitantes e clientes</span>
              </li>
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Direcionamento de chamadas telefônicas</span>
              </li>
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Agendamento de salas de reunião</span>
              </li>
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Recebimento de correspondências e encomendas</span>
              </li>
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Suporte administrativo básico</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold text-lg mb-2 text-confiance-navy">Diferenciais</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Profissionais uniformizados e bem apresentados</span>
              </li>
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Treinamento em atendimento ao cliente</span>
              </li>
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Supervisão constante e acompanhamento de desempenho</span>
              </li>
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Procedimentos padronizados e documentados</span>
              </li>
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Profissionais treinados para lidar com situações de emergência</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-confiance-navy text-center">Por que escolher a Confiance?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <div className="w-16 h-16 bg-confiance-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-confiance-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h4 className="font-bold text-lg mb-2">Excelência no atendimento</h4>
            <p className="text-gray-600">Profissionais treinados para oferecer um atendimento cortês e eficiente.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <div className="w-16 h-16 bg-confiance-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-confiance-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 className="font-bold text-lg mb-2">Segurança reforçada</h4>
            <p className="text-gray-600">Processos e protocolos que garantem maior controle e segurança para sua empresa ou condomínio.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <div className="w-16 h-16 bg-confiance-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-confiance-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="font-bold text-lg mb-2">Confiabilidade</h4>
            <p className="text-gray-600">Serviços consistentes e de qualidade, respaldados pela reputação e experiência da Confiance.</p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default ServicePortaria;
