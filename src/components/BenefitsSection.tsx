
import { CheckCircle2, TrendingUp, Shield, DollarSign, Scale, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <DollarSign size={40} className="text-confiance-green" />,
      title: "Redução de Custos Operacionais",
      description: "Economize até 30% em custos com pessoal eliminando encargos trabalhistas, treinamentos, processos de recrutamento e infraestrutura adicional."
    },
    {
      icon: <TrendingUp size={40} className="text-confiance-green" />,
      title: "Foco no Core Business",
      description: "Dedique tempo e recursos ao que realmente importa: o crescimento do seu negócio. Deixe as atividades secundárias com especialistas."
    },
    {
      icon: <Shield size={40} className="text-confiance-green" />,
      title: "Segurança Jurídica",
      description: "Minimize riscos trabalhistas e preocupações legais. Nossa empresa assume a responsabilidade pela gestão completa dos colaboradores."
    },
    {
      icon: <Scale size={40} className="text-confiance-green" />,
      title: "Flexibilidade Operacional",
      description: "Adapte rapidamente o quadro de funcionários conforme a demanda, sem os desafios e custos de contratações e demissões diretas."
    },
    {
      icon: <Clock size={40} className="text-confiance-green" />,
      title: "Eficiência Imediata",
      description: "Conte com profissionais já treinados e prontos para assumir funções, eliminando curvas de aprendizado e aumentando a produtividade."
    },
    {
      icon: <CheckCircle2 size={40} className="text-confiance-green" />,
      title: "Garantia de Qualidade",
      description: "Serviços constantemente monitorados, com supervisão dedicada e substituição imediata em caso de faltas ou baixo desempenho."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Que Terceirizar Seus Serviços?</h2>
          <div className="h-1 w-20 bg-confiance-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            A terceirização de serviços deixou de ser apenas uma opção e tornou-se uma estratégia essencial para empresas e condomínios que buscam eficiência, economia e excelência operacional.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-confiance-green">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-confiance-navy">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10 mb-10">
          <Link
            to="/beneficios"
            className="button-primary flex items-center gap-2 group"
          >
            Ver todos os Benefícios
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="mt-4 bg-gray-50 p-8 rounded-lg border border-gray-200 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-confiance-navy mb-4 text-center">Transforme sua Gestão Hoje Mesmo</h3>
          <p className="text-gray-700 mb-6 text-center">
            Empresas que terceirizam serviços com a Confiance reportam, em média, economia de 25% nos custos operacionais e aumento de 40% na satisfação dos usuários finais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contato" 
              className="button-secondary inline-flex items-center justify-center"
            >
              Solicite uma Proposta Personalizada
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
