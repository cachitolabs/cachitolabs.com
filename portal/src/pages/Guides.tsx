import GuideCard from '../components/GuideCard';

function Guides() {
  return (
    <div className="bg-black text-white flex-1">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Guides Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1  gap-12 items-center">
            
            {/* Guides Text */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Guides</h2>
              <p className="text-lg text-white leading-relaxed text-justify mb-6">
                Check out our detailed guides covering a wide range of topics, including tutorials, walkthroughs, and hands-on projects. 
                Whether you're setting up a home server, learning to self-host, or exploring coding and automation, there's something here 
                for everyone who loves to learn and build.
              </p>
            </div>

            {/* Guide Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <GuideCard 
                href="/guides/guide-1"
                imageSrc="/cachitolabs_website_footer.png"
                title="Guide 1"
              />

              <GuideCard 
                href="/guides/guide-2"
                imageSrc="/cachitolabs_website_footer.png"
                title="Guide 2"
              />

              <GuideCard 
                href="/guides/guide-3"
                imageSrc="/cachitolabs_website_footer.png"
                title="Guide 3"
              />

              <GuideCard 
                href="/guides/guide-4"
                imageSrc="/cachitolabs_website_footer.png"
                title="Guide 4"
              />

            </div>

          </div>
        </section>

      </div>
    </div>
  )
}

export default Guides
