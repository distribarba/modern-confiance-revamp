
import { FileCheck } from "lucide-react";
import ServiceLayout from "../components/ServiceLayout";

const ServiceFiscalizacao = () => {
  return (
    <ServiceLayout 
      title="Fiscalização de Serviços e Clientes" 
      description="Com orientação adequada em Relações Humanas no atendimento ao público, nossos fiscais de serviços, orientam e organizam funcionários no correto cumprimento do dever, em busca da satisfação do cliente."
      backgroundImage="/lovable-uploads/629b5e90-4444-4c88-9232-e61cbeca5a54.png"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-confiance-navy">Fiscalização especializada para qualidade de serviços</h2>
          <p className="text-gray-600 mb-4">
            A Confiance oferece um serviço completo de fiscalização que garante o cumprimento de processos e procedimentos, com foco no atendimento de excelência e satisfação dos clientes.
          </p>
          <p className="text-gray-600 mb-4">
            Nossos fiscais de serviços são cuidadosamente selecionados e treinados em Relações Humanas, garantindo uma abordagem profissional e eficiente na orientação e organização de equipes.
          </p>
          <p className="text-gray-600">
            Com atuação estratégica e olhar crítico, implementamos processos de fiscalização que elevam o padrão de qualidade dos serviços prestados, contribuindo diretamente para a satisfação e fidelização de clientes.
          </p>
        </div>
        <div>
          <img 
            src="/lovable-uploads/a854899d-a164-42d8-aae6-305417d21314.png" 
            alt="Fiscalização de serviços profissional" 
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-16">
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-confiance-navy">Nossa abordagem inclui:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold text-lg mb-2 text-confiance-navy">Supervisão de Equipes</h4>
            <p className="text-gray-600">Acompanhamento constante das equipes para garantir o cumprimento das normas e procedimentos estabelecidos.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold text-lg mb-2 text-confiance-navy">Controle de Qualidade</h4>
            <p className="text-gray-600">Verificação sistemática da qualidade dos serviços prestados, com foco em melhoria contínua.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold text-lg mb-2 text-confiance-navy">Atendimento ao Cliente</h4>
            <p className="text-gray-600">Orientação específica para garantir excelência no atendimento e alto nível de satisfação do cliente.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold text-lg mb-2 text-confiance-navy">Gestão de Processos</h4>
            <p className="text-gray-600">Implementação e monitoramento de processos eficientes, reduzindo desperdícios e otimizando recursos.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold text-lg mb-2 text-confiance-navy">Relatórios e Métricas</h4>
            <p className="text-gray-600">Elaboração de relatórios detalhados com métricas de desempenho para acompanhamento e tomada de decisão.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold text-lg mb-2 text-confiance-navy">Treinamento e Capacitação</h4>
            <p className="text-gray-600">Programas de treinamento contínuo para desenvolvimento das equipes e melhoria constante do serviço.</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-confiance-navy text-center">Diferenciais do nosso serviço</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="w-16 h-16 bg-confiance-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileCheck className="h-8 w-8 text-confiance-green" />
            </div>
            <h4 className="font-bold text-lg mb-2">Abordagem Humanizada</h4>
            <p className="text-gray-600">Nossa fiscalização combina rigor técnico com sensibilidade nas relações interpessoais.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="w-16 h-16 bg-confiance-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileCheck className="h-8 w-8 text-confiance-green" />
            </div>
            <h4 className="font-bold text-lg mb-2">Foco em Resultados</h4>
            <p className="text-gray-600">Metodologia orientada para resultados mensuráveis e satisfação do cliente final.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="w-16 h-16 bg-confiance-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileCheck className="h-8 w-8 text-confiance-green" />
            </div>
            <h4 className="font-bold text-lg mb-2">Inteligência de Mercado</h4>
            <p className="text-gray-600">Análise de tendências e melhores práticas para evolução constante dos serviços.</p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default ServiceFiscalizacao;
