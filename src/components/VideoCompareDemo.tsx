
import React from "react";
import { VideoCompare } from "@/components/ui/video-compare";

interface VideoCompareDemoProps {
  beforeVideoId: string;
  afterVideoId: string;
  title?: string;
  description?: string;
}

const VideoCompareDemo = ({
  beforeVideoId,
  afterVideoId,
  title = "Antes e Depois",
  description = "Arraste o controle deslizante para comparar os resultados.",
}: VideoCompareDemoProps) => {
  return (
    <div className="flex flex-col items-center w-full">
      <h3 className="text-2xl font-bold mb-2 text-center text-confiance-navy">{title}</h3>
      <p className="text-gray-600 mb-6 text-center max-w-md">{description}</p>
      
      <VideoCompare
        beforeVideoId={beforeVideoId}
        afterVideoId={afterVideoId}
      />
      
      <p className="text-sm text-gray-500 mt-4 text-center max-w-md">
        Arraste para a esquerda ou direita para comparar os vídeos, ou use o controle deslizante abaixo.
      </p>
    </div>
  );
};

export default VideoCompareDemo;
