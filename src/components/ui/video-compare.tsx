
import React, { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface VideoCompareProps {
  beforeVideoId: string;
  afterVideoId: string;
  className?: string;
}

const VideoCompare = ({
  beforeVideoId,
  afterVideoId,
  className,
}: VideoCompareProps) => {
  const [position, setPosition] = useState(50);

  return (
    <div className={cn("relative w-full max-w-md mx-auto", className)}>
      <div className="relative overflow-hidden rounded-lg">
        <AspectRatio ratio={9/16} className="bg-black">
          <div className="absolute inset-0 w-full h-full">
            <iframe
              src={`https://www.youtube.com/embed/${afterVideoId}?autoplay=0&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&mute=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="absolute inset-0 w-full h-full"
              title="After video"
            />
          </div>

          <div 
            className="absolute inset-0 w-full h-full overflow-hidden" 
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${beforeVideoId}?autoplay=0&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&mute=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="absolute inset-0 w-full h-full"
              title="Before video"
            />
          </div>

          {/* Comparison line */}
          <div 
            className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.7)]"
            style={{ left: `${position}%` }}
          />

          {/* Labels */}
          <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium">
            Antes
          </div>
          <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium">
            Depois
          </div>

          {/* Slider handle indicators */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg cursor-grab active:cursor-grabbing"
            style={{ left: `${position}%` }}
          >
            <div className="flex items-center justify-center">
              <span className="sr-only">Arraste para comparar</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-confiance-navy"
              >
                <path d="m9 18 6-6-6-6"/>
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </div>
          </div>
        </AspectRatio>
      </div>

      <div className="mt-4 px-1">
        <Slider
          value={[position]}
          min={0}
          max={100}
          step={0.1}
          onValueChange={(value) => setPosition(value[0])}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export { VideoCompare };
