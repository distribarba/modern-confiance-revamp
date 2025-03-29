
import ServiceLayout from "../components/ServiceLayout";
import ServiceIntro from "../components/services/ServiceIntro";
import AreasOfExpertise from "../components/services/AreasOfExpertise";
import RecruitmentProcess from "../components/services/RecruitmentProcess";
import ServiceAdvantages from "../components/services/ServiceAdvantages";

const ServiceMaoDeObra = () => {
  const maoDeObraImages = [
    "/lovable-uploads/975827ac-3647-45b7-9696-6b414f5b7fc3.png",
    "/lovable-uploads/f3cba157-0ee6-4e79-b197-ccc6be62d539.png",
    "/lovable-uploads/5182ca9b-1643-43ac-ab6e-5848d36e7236.png",
  ];

  const introDescription = [
    "A Confiance oferece soluções ágeis e eficientes em mão de obra temporária, atendendo às demandas sazonais de sua empresa com profissionais qualificados e preparados para diversos setores.",
    "Contamos com um banco de talentos diversificado, permitindo rápida mobilização de equipes para projetos específicos, picos de produção, substituições ou qualquer necessidade pontual.",
    "Nossa abordagem personalizada garante o fornecimento de profissionais que realmente atendem às necessidades da sua empresa, contribuindo para a produtividade e qualidade dos seus serviços."
  ];

  return (
    <ServiceLayout 
      title="Mão de Obra Temporária" 
      description="Atendimento às demandas sazonais em Facilities ou Recursos Humanos, com extenso e diversificado banco de talentos."
      backgroundImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    >
      <ServiceIntro 
        title="Flexibilidade e qualidade em recursos humanos"
        description={introDescription}
        images={maoDeObraImages}
      />

      <AreasOfExpertise />

      <RecruitmentProcess />

      <ServiceAdvantages />
    </ServiceLayout>
  );
};

export default ServiceMaoDeObra;
