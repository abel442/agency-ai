  import React from 'react'
   import {company_logos} from '../assets/assets.js'
  const Trustedby = () => {
    return (
      <div className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 items-center ext-gray-700 dark:text-white '>
     <h3 className='font-semibold'> Trusted by leading companies </h3>

     <div className='flex items-center justify-center flex-wrap gap-10 m-4'>
      {company_logos.map ((logo, index) => (
        <img key={index} src={logo} alt={`Company Logo `} className='max-h-5 sm:max-h-6 dark:drip-shadow-xl' />
      ))}
     </div>

      </div>
    )
  }
  
  export default Trustedby