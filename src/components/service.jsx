   import assets from '../assets/assets.js'
  import Title from './Title.jsx'
  import Servicecard from './Servicecard.jsx'
  const service = () => {
    const services = [
     {
 
       title:'adversting',
       description:'we turn bold ideas into powerful figital solutions that connect, engaged..',
       icon:assets.ads_icon
     },
     {
 
       title:'content marketing',
       description:'we turn bold ideas into powerful figital solutions that connect, engaged..',
       icon:assets.marketing_icon
     },
     {
       title:' content writing',
       description:'we turn bold ideas into powerful figital solutions that connect, engaged..',
       icon:assets.content_icon
 
     },
 
    {
 
      title:'social media',
       description:'we turn bold ideas into powerful figital solutions that connect, engaged..',
       icon:assets.social_icon 
    }
     
 
    ]
    return (
      <div id='services' className=' relative flex flex-col items-center  gap-7 px-4  sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700:text-white  '>
         
       <img src={assets.bgImage2} alt=""  className='absolute -top-110 -right-70 -z-1 dark:hidden'/>
   
        <Title title=" how can we help?" desc="We offer a wide range of digital marketing services to help your business forward." />
 
 
         <div className=' flex flex-col md:grid grid-cols-2'>  
            {services.map((service, index) => (
             <Servicecard key={index} service={service} index={index} />
            ))}
 
         </div>
      </div>
    )
  }
  
  export default service