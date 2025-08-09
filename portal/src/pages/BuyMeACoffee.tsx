
function BuyMeACoffee() {
  return (
    <div className="bg-black text-white flex-1">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-6">
            Buy Me a Coffee
          </h1>
          <p className="text-lg text-white leading-relaxed max-w-3xl mx-auto">
            Any contributions made will help support the equipment, tools, content and ongoing experiments, your support is truly appreciated :)
          </p>
        </div>

        {/* BuyMeACoffee Section */}
        <section className="mb-16">
          <div className="flex justify-center">
            <a href="https://www.buymeacoffee.com/cachitolabs" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://cdn.buymeacoffee.com/buttons/v2/arial-violet.png" 
                alt="Buy Me A Coffee" 
                style={{ height: '60px', width: '217px' }}
                className="hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </section>

        {/* Add padding to fill space and prevent white section */}
        <div className="h-116"></div>
      </div>
    </div>
  )
}

export default BuyMeACoffee