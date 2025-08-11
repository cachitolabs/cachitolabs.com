import { useParams } from 'react-router-dom';
import Guide from '../components/Guide';
import { guideRegistry } from '../data/guideRegistry';

function GuidePage() {
  const { guideId } = useParams();
  
  if (!guideId || !guideRegistry[guideId]) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">Guide not found</h1>
      </div>
    );
  }

  const guideData = guideRegistry[guideId];

  return (
    <Guide 
      guideId={guideData.id}
      title={guideData.title}
      overview={guideData.overview}
      requirements={guideData.requirements}
      steps={guideData.steps}
      videoUrl={guideData.videoUrl}
      githubUrl={guideData.githubUrl}
    />
  );
}

export default GuidePage;