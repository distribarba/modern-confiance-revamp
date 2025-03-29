
import { Brush } from "lucide-react";
import ServiceLayout from "../components/ServiceLayout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ServiceLimpeza = () => {
  const limpezaImages = [
    "/lovable-uploads/549c96fc-b3bf-4cba-a6a7-f63224dc4e7e.png",
    "/lovable-uploads/6b69553d-86c5-4291-a9c8-8795859d8e7e.png",
    "/lovable-uploads/b0a4221a-26a2-4d3b-9d6c-08dbe5b97081.png",
    "/lovable-uploads/b5f73328-b0ac-4626-8972-706207632e54.png",
    "/lovable-uploads/a4f5d370-9a96-4eca-8a7b-f7a0e23eedb1.png",
    "/lovable-uploads/9a39de78-2ec8-4107-9848-f11215a20175.png",
  ];

  return (
    <ServiceLayout 
      title="Limpeza e Conservação" 
      description="Soluções completas de limpeza, paisagismo e coperagem, além de serviços relacionados a coletas seletivas de resíduos."
      backgroundImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-confiance-navy">Soluções profissionais para ambientes limpos e saudáveis</h2>
          <p className="text-gray-600 mb-4">
            Nossa divisão especializada em higiene e conservação oferece soluções completas para manter seu patrimônio em perfeitas condições, garantindo ambientes limpos, agradáveis e saudáveis para seus funcionários e clientes.
          </p>
          <p className="text-gray-600 mb-4">
            Utilizamos produtos e equipamentos de alta qualidade, seguindo rigorosos protocolos de limpeza e contando com profissionais treinados e qualificados para oferecer o melhor serviço.
          </p>
          <p className="text-gray-600">
            Nossos serviços são personalizados de acordo com as necessidades específicas de cada cliente, permitindo um atendimento eficiente e adequado a diferentes tipos de ambientes.
          </p>
        </div>
        <div className="w-full">
          <Carousel className="w-full">
            <CarouselContent>
              {limpezaImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 h-full">
                    <img 
                      src={image} 
                      alt={`Serviço de limpeza e conservação ${index + 1}`} 
                      className="rounded-lg shadow-lg w-full h-[300px] md:h-[400px] object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-16">
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-confiance-navy">Nossos serviços incluem:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold text-lg mb-2 text-confiance-navy">Limpeza comercial e industrial</h4>
            <p className="text-gray-600">Serviços completos para escritórios, lojas, fábricas e outros ambientes comerciais.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold text-lg mb-2 text-confiance-navy">Paisagismo e jardinagem</h4>
            <p className="text-gray-600">Manutenção e conservação de áreas verdes, garantindo beleza e harmonia aos espaços externos.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold text-lg mb-2 text-confiance-navy">Coperagem</h4>
            <p className="text-gray-600">Serviços de copa organizados e eficientes para manter o bem-estar no ambiente de trabalho.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold text-lg mb-2 text-confiance-navy">Gestão de resíduos</h4>
            <p className="text-gray-600">Coleta seletiva e destinação adequada de resíduos, contribuindo para a sustentabilidade.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold text-lg mb-2 text-confiance-navy">Limpeza especializada</h4>
            <p className="text-gray-600">Serviços específicos como limpeza de vidros, fachadas, pisos e áreas de difícil acesso.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-bold text-lg mb-2 text-confiance-navy">Desinfecção de ambientes</h4>
            <p className="text-gray-600">Protocolos rigorosos de higienização para eliminar vírus, bactérias e outros microrganismos.</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-confiance-navy text-center">Por que escolher a Confiance?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-confiance-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-confiance-green text-2xl font-bold">1</span>
            </div>
            <h4 className="font-bold text-lg mb-2">Profissionais qualificados</h4>
            <p className="text-gray-600">Equipe treinada e preparada para oferecer serviços de alta qualidade.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-confiance-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-confiance-green text-2xl font-bold">2</span>
            </div>
            <h4 className="font-bold text-lg mb-2">Produtos ecológicos</h4>
            <p className="text-gray-600">Compromisso com a sustentabilidade, utilizando produtos que respeitam o meio ambiente.</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-confiance-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-confiance-green text-2xl font-bold">3</span>
            </div>
            <h4 className="font-bold text-lg mb-2">Atendimento personalizado</h4>
            <p className="text-gray-600">Soluções sob medida para as necessidades específicas de cada cliente.</p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default ServiceLimpeza;
