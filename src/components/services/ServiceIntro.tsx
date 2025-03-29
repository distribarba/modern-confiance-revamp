
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ServiceIntroProps {
  title: string;
  description: string[];
  images: string[];
}

const ServiceIntro = ({ title, description, images }: ServiceIntroProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-confiance-navy">{title}</h2>
        {description.map((paragraph, index) => (
          <p key={index} className="text-gray-600 mb-4">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="w-full">
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1 h-full">
                  <img 
                    src={image} 
                    alt={`Serviço ${index + 1}`} 
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
  );
};

export default ServiceIntro;
