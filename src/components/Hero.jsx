import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {  IoMdSearch} from "react-icons/io";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper/modules';
import Heroslider from './Heroslider';

export default function Hero() {


    const herodata = [
        {
            id: 1,
            name: "Best for devlopment",
            desciption: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo nobis eos numquam explicabo, incidunt aliquam fugit. Fugiat, omnis accusamus. Omnis sed quia a, esse veritatis vitae rem quis. Nihil, impedit?",
            num1: 4,
            other: "insitudets",
            num2: 4,
            other2: "insitudets",
            src: "https://admin.ducatindia.com/uploads/default/file_1704950684792.webp"

        },

        {
            id: 2,
            name: "Best for eduction and carres",
            desciption: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo nobis eos numquam explicabo, incidunt aliquam fugit. Fugiat, omnis accusamus. Omnis sed quia a, esse veritatis vitae rem quis. Nihil, impedit?",
            num1: 4,
            other: "insitudets",
            num2: 4,
            other2: "insitudets",
            src: "https://admin.ducatindia.com/uploads/default/file_1704960045639.webp"

        },


    ]




    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}

                modules={[Autoplay]}
                className="mySwiper"
            >

                {
                    herodata.map(({ name, desciption, num1, num2, other, other2, src }) =>

                        <SwiperSlide>


                            <Heroslider name={name} describe={desciption} src={src} num1={num1} other={other} num2={num2} other2={other2}></Heroslider>



                        </SwiperSlide>


                    )
                }




            </Swiper>


            <form action="#" method="POST" class="   absolute z-40  top-3/4  left-16">

  <div class="relative mb-4 flex w-full flex-wrap items-stretch">
    <input
      type="search"
      class="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="button-addon1" />

    <button
      class="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5   leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none  bg-blue-500 focus:ring-0 active:bg-primary-800 active:shadow-lg"
      type="button">
      {<IoMdSearch></IoMdSearch>}
    </button>
  </div>

            </form>




        </>
    );
}
