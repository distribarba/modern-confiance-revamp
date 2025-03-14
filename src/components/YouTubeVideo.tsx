
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface YouTubeVideoProps {
  videoId: string;
  title?: string;
  className?: string;
}

const YouTubeVideo = ({ videoId, title = "Vídeo do YouTube", className = "" }: YouTubeVideoProps) => {
  return (
    <div className={`w-full ${className}`}>
      <AspectRatio ratio={9/16} className="overflow-hidden rounded-lg">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </AspectRatio>
    </div>
  );
};

export default YouTubeVideo;
