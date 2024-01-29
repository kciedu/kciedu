import React, { useContext, useEffect, useRef } from 'react'
import course from '../Data/Course'
import { useParams } from 'react-router-dom'
import { userconetxt } from '../context/Context'

function Deatils() {


const {name}= useParams(null)
const {coursedata} = useContext(userconetxt)
const info = course.concat(coursedata);
const data = info.find((item) => item?.Name === name || item?.name === name);



 useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

  
  }, []);
  return (
   <>
   <div className="   min-h-screen flex items-center justify-start flex-wrap p-10 bg-blue-50">

   <div  className="detailcard flex items-start flex-col   w-2/3 ">
        


    <div className="img max-w-sm">
    <img src={data?.src || data?.Image} alt="" />
    </div>
    <p className='mt-5'>
    Elevate your skills with Ducat India! Explore top-notch training courses for a future-ready career. Unlock a world of cutting-edge programs designed to elevate your skills and propel your career forward with
      {data?.des || data?.Name}
    </p>
   </div>

   <form class="w-full max-w-sm shadow-lg p-5 rounded-lg bg-white">
    <h2 className='mb-5 ml-3'>Equary From</h2>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Full Name
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
      course Name  
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="******************"/>
    </div>
  </div>

  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
        Email
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="email" placeholder="Enter eamil"/>
    </div>
  </div>

  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
        Phone number
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="number" placeholder="+91............."/>
    </div>
  </div>
  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
      <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
       Get site
      </button>
    </div>
  </div>
</form>

   
   
   </div>
   </>
  )
}

export default Deatils