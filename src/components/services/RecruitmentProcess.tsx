
import React from "react";

const RecruitmentProcess = () => {
  return (
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
  );
};

export default RecruitmentProcess;
