  import React from "react";
  import axios from "axios";
 import  { useState } from "react";
  import Title from './Title'
import assets from "../assets/assets";

  const Contactus =()=>{


    return(
     
        <div id="contact-us" className=" flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24
        xl:px-40 pt-30 text-gray-700 dark:text-white">
              <Title title=' reach out to us' desc=' from strategy to execution ,we craft figital solution that move your business forward'/>

              
               <form className=" grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full">

                 <div>
                    <p className="mb-2 text-sm font-medium">  your name </p>
                    <div className=" flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                        <img src={assets.person_icon} alt="" />
                        <input type="text"  placeholder="enter your name" className="w-full p-3 text-sm outline-none"  />
                    </div>

                 </div>

             <div>
                    <p className="mb-2 text-sm font-medium">  Email id </p>
                    <div className=" flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                        <img src={assets.email_icon} alt="" />
                        <input type="email"  placeholder="enter your email" className="w-full p-3 text-sm outline-none"  />
                    </div>
                 </div>
                
                <div className=" sm:col-span-2">
                    <p className="mb-2 text-sm font-medium"> message</p>
                    <textarea  rows={8} placeholder="enter your message" className=" w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"   id=""></textarea>
                </div>

                <button type='submit' className=" w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all">
                    submit < img src={ assets.arrow_icon}/>
                      </button>

               </form>
 

        </div>
    )
  }
  export default Contactus