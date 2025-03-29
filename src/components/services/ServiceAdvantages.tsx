
import React from "react";

const ServiceAdvantages = () => {
  return (
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
  );
};

export default ServiceAdvantages;
