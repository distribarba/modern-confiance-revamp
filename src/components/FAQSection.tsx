
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqItems = [
    {
      question: "Quais serviços a Confiance oferece?",
      answer: "A Confiance oferece serviços especializados em diversas áreas, incluindo mão de obra qualificada (níveis técnicos e superiores), limpeza e conservação, portaria e recepção, fiscalização de serviços e clientes, e manutenção predial completa."
    },
    {
      question: "Como funciona o processo de contratação de serviços?",
      answer: "O processo inicia com uma consulta para entendermos suas necessidades específicas. Em seguida, elaboramos uma proposta personalizada, realizamos uma visita técnica ao local, finalizamos o contrato com todos os detalhes e iniciamos o serviço com profissionais capacitados e treinados de acordo com suas necessidades."
    },
    {
      question: "Quais são os principais benefícios da terceirização?",
      answer: "Entre os principais benefícios estão a redução de custos operacionais (com recrutamento, seleção, treinamento, uniformes, benefícios), foco no core business da empresa, segurança jurídica, flexibilidade operacional, eficiência imediata com profissionais já treinados e garantia de qualidade dos serviços."
    },
    {
      question: "A Confiance atende a todo o estado do Rio de Janeiro?",
      answer: "Sim, a Confiance Serviços Especializados está presente em todo o estado do Rio de Janeiro, atendendo empresas públicas e privadas com soluções personalizadas em todas as nossas áreas de atuação."
    },
    {
      question: "Como é feita a seleção dos profissionais?",
      answer: "Realizamos uma análise profunda de currículos e um processo seletivo rigoroso que inclui entrevistas, verificação de referências e, quando necessário, testes práticos específicos para cada função. Nosso objetivo é selecionar profissionais que atendam de imediato às exigências do cargo solicitado pelo cliente."
    },
    {
      question: "Quais tipos de limpeza e conservação a Confiance oferece?",
      answer: "Oferecemos serviços completos de limpeza comercial e industrial, limpeza especializada (vidros, fachadas, pisos), paisagismo e jardinagem, coperagem e gestão de resíduos, incluindo coleta seletiva e destinação adequada de materiais recicláveis."
    },
    {
      question: "Como funciona o serviço de manutenção predial?",
      answer: "Nossa equipe de manutenção predial é composta por profissionais especializados nas áreas elétrica, hidráulica, construção civil, pintura, entre outras. Trabalhamos tanto de forma preventiva, com visitas periódicas programadas, quanto corretiva, atendendo chamados específicos para resolver problemas pontuais."
    },
    {
      question: "Os funcionários da Confiance são treinados para emergências?",
      answer: "Sim, nossos profissionais recebem treinamentos específicos, incluindo Brigada Contra Incêndio, Primeiros Socorros e Segurança do Trabalho, garantindo que estejam preparados para lidar com situações de emergência de forma adequada e segura."
    },
    {
      question: "É possível ajustar o quadro de funcionários conforme a demanda?",
      answer: "Sim, uma das principais vantagens da terceirização é a flexibilidade operacional. Nossa empresa permite que você adapte rapidamente o quadro de colaboradores conforme a variação da demanda, sem os desafios e custos relacionados a contratações e demissões diretas."
    },
    {
      question: "Como a Confiance garante a qualidade dos serviços prestados?",
      answer: "Mantemos um rigoroso sistema de supervisão e monitoramento constante dos serviços prestados. Realizamos visitas periódicas de supervisão, avaliações de desempenho e pesquisas de satisfação com nossos clientes. Além disso, garantimos substituição imediata em caso de faltas ou baixo desempenho."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
          <div className="h-1 w-20 bg-confiance-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Esclareça suas dúvidas sobre nossos serviços e processo de contratação.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="bg-white shadow-md rounded-lg">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-confiance-navy font-medium text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-6">
            Ainda tem dúvidas? Entre em contato conosco!
          </p>
          <a 
            href="#contato" 
            className="button-primary inline-flex items-center justify-center"
          >
            Fale com um especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
