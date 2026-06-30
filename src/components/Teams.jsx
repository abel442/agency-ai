import React from 'react'
import Title from './Title'
import { teamData } from '../assets/assets'  

const Teams = () => {
  return (
    <div className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white'>
      <Title title='meet the team' desc='Meet our talented team of professionals dedicated to delivering exceptional results.' />
      
      <div className='flex overflow-x-auto gap-6 w-full py-6 scrollbar-none snap-x snap-mandatory scroll-smooth'>
        {teamData.map((team, index) => (
          <div key={index} className='flex-shrink-0 w-60 bg-white dark:bg-gray-900 rounded-xl shadow-xl shadow-gray-100 dark:shadow-black/20 p-6 flex flex-col items-center border border-gray-100 dark:border-gray-800 hover:scale-105 transition-all duration-300 snap-center'>
            <img src={team.image} alt={team.name} className='w-20 h-20 rounded-full object-cover mb-4 ring-4 ring-gray-50 dark:ring-gray-800' />
            <div className='text-center'>
                <h3 className='font-bold text-sm text-gray-800 dark:text-white'>{team.name}</h3>
                <p className='text-xs opacity-60 mt-1 capitalize'>{team.title}</p>
            </div>
          </div>    
        ))}
      </div>
    </div>
  )
}
   
export default Teams