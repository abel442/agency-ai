import assets from '../assets/assets.js'

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-24 text-gray-800 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-semibold uppercase tracking-wider">
            <span>✨ Creative & Smart Solutions</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Next-Gen <span className="text-primary">Agency</span> for Digital Excellence
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
            We deliver state-of-the-art marketing, advertising, and content solutions backed by powerful AI tools to elevate your brand presence.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a 
              href="#contact" 
              className="flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-semibold hover:bg-opacity-90 active:scale-95 transition-all shadow-md"
            >
              Get Started
              <img src={assets.arrow_icon} width={12} alt="Arrow" />
            </a>
            <a 
              href="#services" 
              className="px-8 py-3.5 rounded-full border border-gray-300 dark:border-gray-700 font-semibold hover:bg-gray-50 dark:hover:bg-gray-900 transition-all"
            >
              Learn More
            </a>
          </div>

          {/* Social Proof */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <img src={assets.group_profile} alt="Users" className="h-10 w-auto" />
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <span className="font-bold text-gray-800 dark:text-white">5k+</span> active clients trust our services worldwide.
            </div>
          </div>
        </div>

        {/* Right Hero Image */}
        <div className="flex-1 relative w-full max-w-md lg:max-w-none">
          {/* Background decorative glow */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-purple-500/30 rounded-3xl blur-2xl opacity-70 -z-10 animate-pulse duration-3000"></div>
          
          <div className="relative border border-gray-200/50 dark:border-gray-800/50 rounded-2xl overflow-hidden shadow-2xl bg-white/5 dark:bg-black/5 backdrop-blur-sm transition-transform duration-500 hover:scale-[1.02]">
            {/* Main Hero Image */}
            <img 
              src={assets.hero_img} 
              alt="Creative Team Work" 
              className="w-full h-auto object-cover" 
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
