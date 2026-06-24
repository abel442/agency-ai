 import React from 'react'
 
import assets from "../assets/assets.js";


 const Navbar = ({theme, setTheme}) => {
   return (
     <div className='flex justify-between items-center p-4 bg-gray-800 text-white sm:px-12 lg:px-24 xl:px-48 py-4 sticky top-0 z-20 backdrop-blur-md bg-opacity-80 font-medium bg-white/50 dark:bg-gray-900/70'>

     <img src= { theme === 'dark' ? assets.logo_dark : assets.logo} />  


     </div>
   )
 }
 
 export default Navbar