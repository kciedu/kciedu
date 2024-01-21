import React, { useEffect } from 'react'

function Contact() {
  

 useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });


}, []);
  return (
    <section class="text-gray-700 body-font relative">
  <div class="absolute inset-0 bg-gray-300   mt-20 mb-20">
    
    <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no"
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11795.245597554454!2d77.33877879097064!3d28.487150010819395!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7af054c77ab%3A0x3e053543a8384146!2sKCI%20Education!5e0!3m2!1sen!2sin!4v1705489426311!5m2!1sen!2sin"  class="filter grayscale-100 contrast-120 opacity-40"
      ></iframe>
  </div>
  <div class="container px-5 py-24 mx-auto flex">
    <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
    <h1 class="text-3xl text-[#333] font-extrabold text-center">Contact</h1>
            <form class="mt-8 space-y-4">
                <input type='text' placeholder='Name'
                    class="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500" />
                <input type='email' placeholder='Email'
                    class="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500" />
                
                <textarea placeholder='Message' rows="6"
                    class="w-full rounded-md px-4 bg-gray-100 text-sm pt-3 outline-blue-500"></textarea>
                <button type='button'
                    class="text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-3 w-full">Send</button>
            </form>
        </div>
  </div>
</section>
  )
}

export default Contact