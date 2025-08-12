import RecommendationCard from '../components/RecommendationCard';
import product1 from '../assets/recommendations/arcticliquidfreezer.jpg'
import product2 from '../assets/recommendations/amdryzen97950x.jpg'
import product3 from '../assets/recommendations/asusproartx870e.jpg'
import product4 from '../assets/recommendations/gskilltridentz5ram.jpg'
import product5 from '../assets/recommendations/nzxth7flow2024.jpg'
import product6 from '../assets/recommendations/wdblack2tbnvme.jpg'
import product7 from '../assets/recommendations/corsairrm1000x.jpg'
import product8 from '../assets/recommendations/ergotronarm.jpg'
import product9 from '../assets/recommendations/amazonbasicscat7ethernet.jpg'
import product10 from '../assets/recommendations/wattpowermeterplug.jpg'
import product11 from '../assets/recommendations/arcticp12pwm120mmfans3pack.jpg'
import product12 from '../assets/recommendations/arcticp12pwm120mmfans1pack.jpg'

function Recommendations() {
  return (
    <div className="bg-black text-white flex-1">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Recommendations Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1  gap-12 items-center">
            
            {/* Recommendations Text */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Recommended Products</h2>
              <p className="text-lg text-white leading-relaxed text-justify mb-6">
                All of these are products we use and recommend. Some products may include affiliate links, 
                which means we may earn a small commission if you purchase through them, at no extra cost to you. 
                Take a look and see what could level up your setup!
              </p>
            </div>
            
            {/* Amazon Cards Grid */}
            <h2 className="text-3xl font-bold text-white">Amazon</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <RecommendationCard 
                href="https://amzn.to/45bPOwf"
                imageSrc={product1}
                title="ARCTIC Liquid Freezer III Pro 360 A-RGB"
              />
              <RecommendationCard 
                href="https://amzn.to/46Ryf5Z"
                imageSrc={product2}
                title="AMD Ryzen 9 7950X "
              />
              <RecommendationCard
                href="https://amzn.to/46TVvQQ"
                imageSrc={product3}
                title="ASUS ProArt X870E-CREATOR WiFi AMD AM5 X870E ATX Motherboard"
              />
              <RecommendationCard
                href="https://amzn.to/4mw1QWU"
                imageSrc={product4}
                title="G.SKILL Trident Z5 RGB Series (Intel XMP 3.0 & AMD Expo) DDR5 RAM 64GB"
              />
              <RecommendationCard
                href="https://amzn.to/4fRbWjn"
                imageSrc={product5}
                title="NZXT H7 Flow 2024 - Mid-Tower ATX Airflow Case"
              />
              <RecommendationCard
                href="https://amzn.to/41zaMTr"
                imageSrc={product6}
                title="WD_BLACK 2TB SN850X NVMe Internal Gaming SSD Solid State Drive"
              />
              <RecommendationCard
                href="https://amzn.to/4ossoud"
                imageSrc={product7}
                title="CORSAIR RM1000x Fully Modular Low-Noise ATX Power Supply"
              />
              <RecommendationCard
                href="https://amzn.to/4ltiV35"
                imageSrc={product8}
                title="Ergotron – HX HD Premium Heavy Duty Gaming Monitor Arm"
              />
              <RecommendationCard
                href="https://amzn.to/45voJTy"
                imageSrc={product9}
                title="Amazon Basics RJ45 Cat 7 Ethernet Patch Cable"
              />
              <RecommendationCard
                href="https://amzn.to/4mcKz5F"
                imageSrc={product10}
                title="Upgraded Watt Power Meter Plug"
              />
              <RecommendationCard
                href="https://amzn.to/4md3eOI"
                imageSrc={product11}
                title="ARCTIC P12 PWM PST A-RGB (3 Pack) - PC Fans, 120mm PWM Case"
              />
              <RecommendationCard
                href="https://amzn.to/4ovKThl"
                imageSrc={product12}
                title="ARCTIC P12 PWM PST A-RGB - PC Fan, 120mm PWM Case"
              />

            </div>

          </div>
        </section>

      </div>
    </div>
  )
}

export default Recommendations