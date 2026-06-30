   import React from 'react'
   import Title from './Title.jsx'  
   import assets from '../assets/assets.js'
   const Ourwork = () => {

     const workdata =[
 
      {
        title:' moblile app marketing',
        description:' we turn bold ideas into poweful digital solution that connect,engage...',
        image:assets.work_mobile_app
      },
      {
        title:' Dashbord management',
        description:' we turn bold ideas into poweful digital solution that connect,engage...',
        image:assets.work_dashboard_management

      },

      {
        title:' fitness app promtion',
        description:' we turn bold ideas into poweful digital solution that connect,engage...',
        image:assets.work_mobile_app
      }


     ] 
     return (
       <div   id='our-work 'className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24  items-center text-gray-700 dark:text-white '>

      <Title title=' our latest work' desc='We have worked with a wide range of clients across various industries, delivering exceptional results and driving business growth.' />
         
       <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
           {

            workdata.map((work,index)=>(
              <div key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
                <img src={work.image} className='w-full rounded-xl'   />
                <h3 className='mt-3 mb-2 text-lg font-semibold  text-gray-700 dark:text-white'> {work.title}</h3>
                <p  className='text-sm opacity-60 w-5/6'>  {work.description  }</p>
                
              </div>
            ))
           }
       </div>
       </div>
     )
   }
   
   export default Ourwork