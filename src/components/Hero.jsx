import React from 'react'
import assets from '../assets/assets.js'
const Hero = () => {
    return (
      
        <div id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 
     xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white '>

            <div className=' inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>

                <img className='bg w-20 bg-red-50 ' src={assets.group_profile }/>
                <p className='text-xs font-medium'> trustedby 10k+ people </p>
            </div>
       <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl'>
  turning imagination into
  <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] text-transparent bg-clip-text'>
      reality
  </span>
  impact
</h1>


 <p className=' text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>  creating meaningful connections and  turning big ideas into interactive digital experiences </p>
    <div>
    <img src={assets.hero_img} className='w-full max-w-6xl ' alt='hero image' />
<img
  src={assets.bgImage1}
  className="absolute -top-40 -right-40 sm:-top-[100px] sm:-right-[70px] z-[-1] dark:hidden"
  alt="background image"
/>
    </div>
 
 
 
   </div>

  

        

    )
}

export default Hero     