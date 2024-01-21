import React, { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userconetxt } from '../context/Context'

function Navbars() {

    const [opennav, setnav]=useState(false)
  const {userdata} = useContext(userconetxt)
  return (
 
    <header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm  dark:bg-gray-800 fixed left-0 right-0 top-0   ">
    <nav class="max-w-[85rem] w-full mx-auto  sm:flex sm:items-center sm:justify-between shadow-sm p-4 px-10 pb-5" aria-label="Global">
      <div class="flex items-center justify-between">
        <Link class="inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white" to={'/'}>
        
        <span className="text-white bg-black p-2 rounded-lg">KCI</span>
        
        Eduction
        </Link>
        <div class="sm:hidden">
          <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-image-and-text-1" aria-controls="navbar-image-and-text-1" aria-label="Toggle navigation" onClick={()=> setnav((prev)=>!prev)}>
            <svg class={`hs-collapse-open:hidden flex-shrink-0 w-4 h-4 ${opennav ? 'hidden' : ''}`}  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
            <svg class={`hs-collapse-open:block ${opennav ? '' : 'hidden'} flex-shrink-0 w-4 h-4`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
      </div>
      <div
  id="navbar-image-and-text-1"
  className={`hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block ${opennav ? '' : 'hidden'}`}
>
        <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
          {
            [

                {
                    id:1,
                    name:"Home",
                    path:'/',
                },
                {
                    id:2,
                    name:"About",
                    path:'about',
                },
                {
                    id:3,
                    name:"Course",
                    path:'course',
                },
                {
                  id:4,
                  name:"Placement",
                  path:'placement',
              },
              {
                id:5,
                name:"Contact",
                path:'contact',
               },
           

            ].map((i)=>
            
            <Link to={i.path} class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 border-r-2 border-solid border-blue-500  pl-4 pr-2 cursor-pointer" >{i.name}</Link>
            )
          }

      {
  userdata && userdata.data?.Name ? (
    <span className="font-medium text-white bg-blue-400 p-3 rounded-lg cursor-pointer">
      {userdata.data.Name==="Admin" ? <Link to={'/dashbord'}> Admin </Link> : <Link to={'/'}> userdata.data.Name </Link>  }
    </span>
  ) : (
    <Link to={'login'} className="login bg-blue-600 text-white p-2 rounded-md cursor-pointer">
      LOGIN
    </Link>
  )
}
        </div>
      </div>
    </nav>
  </header>
  
  )
}

export default Navbars