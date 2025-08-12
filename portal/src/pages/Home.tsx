import { Link } from 'react-router-dom';
import GuideCard from '../components/GuideCard';
import footer from '../assets/website/cachitolabs_website_footer.png'

function Home() {
  return (
    <div className="bg-black text-white flex-1">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
        </div>

        {/* About Us Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* About Us Text */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">About Us</h2>
              <p className="text-lg text-white leading-relaxed text-justify mb-6">
                At cachito labs we explore and experiment with technology. 
                From PCs and home servers to self-hosting, networking, automation, 
                coding, AI, and DIY projects, we're all about hands-on learning fueled 
                by curiosity and creativity. If you like tech, learning new skills, or 
                experimenting, you're in the right place.
              </p>

              <a 
                href="https://www.youtube.com/@cachitolabs" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-gray-600 hover:bg-white hover:text-black hover:border-white text-white font-bold py-3 px-6 rounded-lg transition-colors text-center"
                style={{ textDecoration: 'none' }}
              >
                Learn more
              </a>
            </div>

            {/* YouTube Video */}
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/hNrr0aJgxig"
                  title="Cachito Labs - About Us"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

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
                imageSrc={footer}
                title="Guide 1"
              />

              <GuideCard 
                href="/guides/guide-2"
                imageSrc={footer}
                title="Guide 2"
              />

              <GuideCard 
                href="/guides/guide-3"
                imageSrc={footer}
                title="Guide 3"
              />

            </div>

            <Link 
              to="/guides" 
              className="inline-block border border-gray-600 hover:bg-white hover:text-black hover:border-white text-white font-bold py-3 px-6 rounded-lg transition-colors text-center"
              style={{ textDecoration: 'none' }}
            >
              More guides
            </Link>

          </div>
        </section>

        {/* Contact Us Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-12 items-center">
            
            {/* Contact Us Text */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
              <p className="text-lg text-white leading-relaxed text-justify mb-6">
                Interested in working together? Send us an email at contact@cachitolabs.com and we'll be in touch shortly.
                We can't wait to hear from you!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
