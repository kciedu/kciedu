import React from 'react'

function Career() {
  return (
    <div className='  bg-gray-50 min-h-screen'>

       

        <div class="  w-full  p-2 pt-28">
<h1 class="flex items-center text-3xl font-extrabold dark:text-white">Job hai <span class="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">PRO</span></h1>
        <div class="group  grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto  bg-white">
    <a href="#" class="order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4">
      <div class="group relative h-16 w-16 overflow-hidden rounded-lg">
        <img src="https://img.freepik.com/premium-photo/vanilla-ice-cream-balls-with-green-mint-leaf-white-ceramic-plate_116441-23919.jpg" alt="" class="h-full w-full object-cover text-gray-700" />
      </div>
    </a>
    <div class="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
      <h3 class="text-sm text-gray-600">Invision</h3>
      <a href="#" class="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"> Sr. Frontend Engineer </a>
      <p class="overflow-hidden pr-7 text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna .</p>

   
      <div class="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
        <div class="">Experience:<span class="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900"> 2 Years </span></div>
        <div class="">Salary:<span class="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">180-250k</span></div>
      </div>
      <button type="button" class="py-2.5 mt-4 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Apply</button>
    </div>

  </div>



</div>

    </div>
  )
}

export default Career