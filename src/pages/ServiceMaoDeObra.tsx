
import ServiceLayout from "../components/ServiceLayout";

const ServiceMaoDeObra = () => {
  return (
    <ServiceLayout 
      title="Mão de Obra Temporária" 
      description="Atendimento às demandas sazonais em Facilities ou Recursos Humanos, com extenso e diversificado banco de talentos."
      backgroundImage="/lovable-uploads/c851a8cc-ea6b-465d-9ca4-57c6430a1ee2.png"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-confiance-navy">Flexibilidade e qualidade em recursos humanos</h2>
          <p className="text-gray-600 mb-4">
            A Confiance oferece soluções ágeis e eficientes em mão de obra temporária, atendendo às demandas sazonais de sua empresa com profissionais qualificados e preparados para diversos setores.
          </p>
          <p className="text-gray-600 mb-4">
            Contamos com um banco de talentos diversificado, permitindo rápida mobilização de equipes para projetos específicos, picos de produção, substituições ou qualquer necessidade pontual.
          </p>
          <p className="text-gray-600">
            Nossa abordagem personalizada garante o fornecimento de profissionais que realmente atendem às necessidades da sua empresa, contribuindo para a produtividade e qualidade dos seus serviços.
          </p>
        </div>
        <div>
          <img 
            src="/lovable-uploads/d3d95d4f-b7d3-433c-a957-8c4b7d2f9f61.png" 
            alt="Equipe de profissionais temporários" 
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-16">
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-confiance-navy">Áreas de atuação:</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold text-lg mb-2 text-confiance-navy">Administrativo</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Assistentes administrativos</span>
              </li>
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Recepcionistas</span>
              </li>
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Secretárias</span>
              </li>
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Digitadores</span>
              </li>
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Operadores de telemarketing</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold text-lg mb-2 text-confiance-navy">Operacional</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Auxiliares de produção</span>
              </li>
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Operadores de máquinas</span>
              </li>
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Estoquistas</span>
              </li>
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Conferentes</span>
              </li>
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Motoristas</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold text-lg mb-2 text-confiance-navy">Técnico</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Técnicos em TI</span>
              </li>
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Técnicos em manutenção</span>
              </li>
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Eletricistas</span>
              </li>
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Técnicos em segurança</span>
              </li>
              <li className="flex items-start">
                <span className="text-confiance-green mr-2">•</span>
                <span>Profissionais de saúde</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-confiance-navy">Nosso processo de recrutamento</h3>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-confiance-green/20 z-0"></div>
          <div className="relative z-10 space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-confiance-green text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">1</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow flex-grow">
                <h4 className="font-bold text-lg mb-2 text-confiance-navy">Análise de necessidades</h4>
                <p className="text-gray-600">Entendemos a fundo as necessidades específicas da sua empresa, o perfil desejado e as competências necessárias para a função.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-confiance-green text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">2</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow flex-grow">
                <h4 className="font-bold text-lg mb-2 text-confiance-navy">Recrutamento especializado</h4>
                <p className="text-gray-600">Utilizamos diversas fontes de recrutamento e aplicamos filtros específicos para selecionar os melhores candidatos.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-confiance-green text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">3</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow flex-grow">
                <h4 className="font-bold text-lg mb-2 text-confiance-navy">Seleção rigorosa</h4>
                <p className="text-gray-600">Realizamos entrevistas, aplicamos testes e verificamos referências para garantir a qualidade dos profissionais selecionados.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-confiance-green text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">4</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow flex-grow">
                <h4 className="font-bold text-lg mb-2 text-confiance-navy">Contratação e integração</h4>
                <p className="text-gray-600">Cuidamos de todo o processo burocrático e preparamos os profissionais para iniciarem suas atividades rapidamente.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-confiance-green text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">5</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow flex-grow">
                <h4 className="font-bold text-lg mb-2 text-confiance-navy">Acompanhamento contínuo</h4>
                <p className="text-gray-600">Monitoramos o desempenho dos profissionais e mantemos contato constante para garantir a satisfação de ambas as partes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-confiance-navy/5 p-8 rounded-lg">
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-confiance-navy text-center">Vantagens da mão de obra temporária</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow flex">
            <div className="mr-4 text-confiance-green">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Redução de custos</h4>
              <p className="text-gray-600">Economize com encargos trabalhistas e processos de recrutamento internos, pagando apenas pelo período necessário.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow flex">
            <div className="mr-4 text-confiance-green">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Agilidade no atendimento a demandas</h4>
              <p className="text-gray-600">Responda rapidamente a picos de trabalho, projetos especiais ou substituições emergenciais.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow flex">
            <div className="mr-4 text-confiance-green">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Qualidade e confiabilidade</h4>
              <p className="text-gray-600">Acesso a profissionais pré-selecionados e qualificados, prontos para atender às necessidades da sua empresa.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow flex">
            <div className="mr-4 text-confiance-green">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Flexibilidade</h4>
              <p className="text-gray-600">Ajuste o tamanho da sua equipe conforme a demanda, sem comprometer a qualidade do serviço.</p>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default ServiceMaoDeObra;
