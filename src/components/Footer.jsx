import React from 'react'
import assets from '../assets/assets'

const Footer = () => {
  return (
    <div className=' bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:pt-20 sm:mt-40 px-4 sm:px-10 
    lg:px-24 xl:px-40'>

       <div className=' flex justify-between lg:items-center max-lg:flex-col gap-10'>
        <div>
          
          <img src={assets.logo}  className='w-32 sm:w-44' alt="" />

          <p className=' max-w-md'>  from strategy  to exeution, we craft digital solution that move your business forward.</p>
           <div  > 
            
             <ul className='flex gap-8 '>
            <li> <a  className=" hover:text-primary"href="#hero">  Home</a> </li>
            <li> <a  className=" hover:text-primary"href="#services">services </a> </li>
            <li> <a  className=" hover:text-primary"href="#Ourwork">  our-work</a> </li>
            <li> <a  className=" hover:text-primary"href="#contact-us">  contact-us</a> </li>            
          </ul>
            
              </div>
         


         {/* <div className='  text-gray-600 dark:text-gray-400'>
          <h3 className=' font-semibold'> subscribe to our newletter  </h3>
          <p className='text-sm mt-2 mb-6'> the latest news and resources, sent to your inbox weekly </p>


          <div className='flex  gap-4'>
          <input type="email" placeholder='enter your email' 
          className=' flex-1 p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500' />
          <button className=' bg-primary text-white rounded px-6' > subscribe


  
          </button>

          </div>


         </div> */}
          </div> 
        
        
        </div>


    </div>
  )
}

export default Footer
