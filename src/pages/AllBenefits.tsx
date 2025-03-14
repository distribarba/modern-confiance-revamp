
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";

const AllBenefits = () => {
  const benefits = [
    {
      title: "Recrutamento e Seleção",
      description: "Processo completo de captação de talentos e análise de perfil profissional realizado por especialistas."
    },
    {
      title: "Contratação",
      description: "Procedimentos legais e admissionais conduzidos de forma ágil e eficiente, reduzindo a burocracia."
    },
    {
      title: "Treinamento",
      description: "Capacitação inicial e contínua dos profissionais para garantir o alto padrão de qualidade dos serviços."
    },
    {
      title: "Uniformes",
      description: "Fornecimento e gerenciamento de uniformes padronizados e adequados a cada tipo de serviço."
    },
    {
      title: "Transporte",
      description: "Gerenciamento dos custos e logística de deslocamento dos profissionais para os locais de trabalho."
    },
    {
      title: "13º Salário",
      description: "Planejamento e provisão financeira para pagamento do 13º salário, sem impactos no orçamento do cliente."
    },
    {
      title: "Vale Alimentação",
      description: "Administração e fornecimento de benefícios alimentares conforme legislação e acordos coletivos."
    },
    {
      title: "Férias",
      description: "Programação e gerenciamento de férias com substituição adequada para manter a continuidade dos serviços."
    },
    {
      title: "INSS, FGTS",
      description: "Gestão e recolhimento de encargos sociais e trabalhistas em conformidade com a legislação vigente."
    },
    {
      title: "Licenças remuneradas",
      description: "Cobertura durante afastamentos legais, mantendo a operação sem prejuízos à produtividade."
    },
    {
      title: "Provisões para verbas rescisórias",
      description: "Reserva financeira para eventuais desligamentos, garantindo segurança jurídica e econômica."
    },
    {
      title: "Reservas para eventuais substituições",
      description: "Equipe de backup preparada para cobrir ausências e garantir a continuidade dos serviços sem interrupções."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isFixed={true} />
      
      <main className="flex-grow">
        <div 
          className="bg-confiance-navy py-16 md:py-24 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `linear-gradient(rgba(47, 46, 105, 0.85), rgba(47, 46, 105, 0.9)), url('/lovable-uploads/924a7bc9-ea91-4247-8035-bc7c24760eee.png')` }}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Link to="/" className="inline-flex items-center text-confiance-green hover:text-white transition-colors mb-6">
                <ArrowLeft size={16} className="mr-2" />
                Voltar para a página inicial
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Benefícios da Terceirização</h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Conheça as vantagens de terceirizar seus serviços com a Confiance e otimize a gestão da sua empresa.
              </p>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-confiance-navy">
                Por que escolher a terceirização de serviços?
              </h2>
              <p className="text-lg text-gray-700">
                Ao terceirizar serviços com a Confiance, sua empresa transfere para nós a responsabilidade por diversos 
                processos e obrigações, permitindo que você foque no seu core business e reduza custos operacionais significativamente.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex">
                  <div className="shrink-0 mr-4">
                    <div className="bg-confiance-green/10 p-2 rounded-full">
                      <Check className="h-6 w-6 text-confiance-green" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-confiance-navy">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-confiance-navy mb-4 text-center">
                Transforme sua gestão com a Confiance
              </h3>
              <p className="text-gray-700 mb-6 text-center">
                Ao terceirizar com a Confiance, você elimina preocupações com recrutamento, encargos trabalhistas, 
                treinamento e gestão de pessoas, concentrando seus esforços no crescimento do seu negócio.
              </p>
              <div className="flex justify-center">
                <a 
                  href="/#contato" 
                  className="bg-confiance-green text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 font-medium inline-flex items-center"
                >
                  Solicite uma proposta personalizada
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default AllBenefits;
