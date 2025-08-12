interface RecommendationCardProps {
  href: string;
  imageSrc: string;
  title: string;
}

export default function RecommendationCard({ href, imageSrc, title }: RecommendationCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block"
      >
        <div className="aspect-video bg-gradient-to-r from-red-500 to-purple-600 flex items-center justify-center">
          <img 
            src={imageSrc} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-2">
          <h3 className="text-white font-semibold text-lg hover:text-gray-300 transition-colors">
            {title}
          </h3>
        </div>
      </a>
    </div>
  );
}