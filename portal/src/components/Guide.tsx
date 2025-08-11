interface GuideProps {
  guideId?: string;
  title?: string;
  overview?: string;
  requirements?: string[];
  steps?: string[];
  videoUrl?: string | null;
  githubUrl?: string;
}

function Guide({ 
  guideId,
  title,
  overview,
  requirements,
  steps,
  videoUrl,
  githubUrl
}: GuideProps) {
  const getYouTubeEmbedUrl = (url: string | null | undefined) => {
    if (!url) return "";
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return videoId ? `https://www.youtube.com/embed/${videoId[1]}` : url;
  };

  return (
    <div className="bg-black text-white flex-1">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="text-gray-400 text-sm mb-2">
            GUIDE ID: {guideId}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
              <div className="text-gray-300 leading-relaxed whitespace-pre-line text-justify">
                {overview}
              </div>
            </section>

            {/* Requirements */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Requirements</h2>
              <ul className="space-y-3">
                {requirements?.map((requirement, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <div className="leading-relaxed whitespace-pre-line text-justify">
                      {requirement}
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Steps Covered */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Steps Covered</h2>
              <ol className="space-y-4">
                {steps?.map((step, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <span className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </span>
                    <div className="leading-relaxed whitespace-pre-line text-justify">
                      {step}
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          {/* Right Column - Video */}
          <div className="lg:col-span-3 lg:sticky lg:top-8">
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  width="100%"
                  height="100%"
                  src={getYouTubeEmbedUrl(videoUrl)}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
            
            {/* Guide Button */}
            <div className="mt-6">
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full border border-gray-600 hover:bg-white hover:text-black hover:border-white text-white font-bold py-3 px-6 rounded-lg transition-colors text-center"
              >
                Full Guide
              </a>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Found this Helpful?</h3>
              <p className="text-gray-400">Support the creation of more guides</p>
            </div>
            <div>
              <a 
                href="https://www.buymeacoffee.com/cachitolabs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <img 
                  src="https://cdn.buymeacoffee.com/buttons/v2/arial-violet.png" 
                  alt="Buy Me A Coffee" 
                  className="h-12 w-auto rounded-lg"
                />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Guide;
