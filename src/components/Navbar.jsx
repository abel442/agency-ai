import { useState } from 'react'
import assets from "../assets/assets.js";
import ThemeTogglebtn from '../components/ThemeTogglebtn';

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex justify-between items-center p-4 text-gray-800 dark:text-white sm:px-12 lg:px-24 xl:px-48 py-4 sticky top-0 z-20 backdrop-blur-md bg-white/50 dark:bg-gray-900/70 font-medium border-b border-gray-100 dark:border-gray-800 transition-colors duration-300'>
      
      {/* Brand Logo */}
      <img src={assets.logo_dark} alt="Logo" className='w-28 dark:invert transition-all' />  

      {/* Navigation Links */}
      <div className={`flex space-x-4 text-gray-600 dark:text-gray-300 sm:text-sm
        max-sm:fixed max-sm:top-0 max-sm:bottom-0 max-sm:right-0 max-sm:w-60 max-sm:pl-10 
        max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 
        sm:items-center gap-5 transition-transform duration-300 z-30
        ${sidebarOpen ? 'max-sm:translate-x-0' : 'max-sm:translate-x-full'}`}>

        <img 
          src={assets.close_icon} 
          className='w-5 absolute right-4 top-4 sm:hidden cursor-pointer' 
          onClick={() => setSidebarOpen(false)} 
          alt="Close" 
        />

        <a href="#hero" className='sm:hover:text-primary transition-colors' onClick={() => setSidebarOpen(false)}>Home</a>

        <a href="#services" className='sm:hover:text-primary transition-colors' onClick={() => setSidebarOpen(false)}>Services</a>
        <a href="#Ourwork"   className='sm:hover:text-primary transition-colors'  onClick={() => setSidebarOpen(false)}>Ourwork</a>
        <a href="#contact-us" className='sm:hover:text-primary transition-colors'  onClick={() => setSidebarOpen(false)}>Contact</a>
      </div>

      {/* Theme Toggle & CTA Buttons */}
      <div className='flex items-center gap-3 sm:gap-4'> 
        <ThemeTogglebtn theme={theme} setTheme={setTheme} />
        
        <a 
          href="#contact-us"  
          className='text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full cursor-pointer hover:bg-opacity-90 active:scale-95 transition-all shadow-sm'
        >
          connect
          <img src={assets.arrow_icon} width={12} alt="Arrow" />
        </a>

        {/* Mobile menu trigger */}
        <img 
          src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} 
          className='w-6 sm:hidden cursor-pointer hover:opacity-80 transition-opacity' 
          onClick={() => setSidebarOpen(true)} 
          alt="Menu" 
        />
      </div>

    </div>
  )
}

export default Navbar