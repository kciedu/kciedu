import React, { useContext, useEffect, useState } from 'react';
import { Select, Option } from "@material-tailwind/react";
import Hero from '../components/Hero';
import Cards from '../components/Card';

import Navbars from '../components/Navbar';
import course from '../Data/Course';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../App.css';
import { Autoplay } from 'swiper/modules';
import { Footer } from './Footer';
import Deatilsheader from '../components/Deatilsheader';
import { Link } from 'react-router-dom';
import Roadmap from '../components/Roadmap';
import Conatctmenu from '../components/Conatctmenu';

function Home() {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [address, setaddress] = useState('Roshan nager  Agwanpur faridabad');
  const [countdown, setCountdown] = useState(calculateCountdown());
  
  useEffect(() => {
    // Update the countdown every second
    const intervalId = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  function calculateCountdown() {
    const now = new Date();
    const nextCountdownDate = new Date(now);
    nextCountdownDate.setHours(now.getHours() + 5);
    nextCountdownDate.setMinutes(0);
    nextCountdownDate.setSeconds(0);
    const timeDifference = nextCountdownDate - now;
  
    // Calculate hours, minutes, and seconds
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    return { hours, minutes, seconds };
  }
  

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1200) {
        setSlidesPerView(5);
      } else if (window.innerWidth >= 992) {
        setSlidesPerView(4);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 576) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    // Initial setup
    updateSlidesPerView();

    // Update slidesPerView on window resize
    window.addEventListener('resize', updateSlidesPerView);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  return (
    <>
    <Conatctmenu></Conatctmenu>
      <Hero />
    <Deatilsheader></Deatilsheader>
      <section className='top programs'>
        <h2 className="text-4xl p-10 font-bold ">Explore Top Programs</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-10 place-items-center	'>
          {course.map((i) =>
          <Link to={`/details/${i.name}`} className='flex items-center shadow-lg min-w-full bg-gray-50 rounded-lg '>
           

              <div className="w-20">
                <img src={i.src}alt={i.name} className=' max-h-12 object-cover' />
              </div>
              <p className="p-5" >{i.name}</p>
           
          </Link>
          )}
        </div>
      </section>
      <section className='upcoming Batches p-10'>
        <h2 className="text-4xl font-bold">Upcoming Batches : <span className=' text-red-500'>{`${countdown.hours}h ${countdown.minutes}m ${countdown.seconds}s`}</span></h2>
        <div className="branch flex items-center gap-3 flex-wrap mt-5">
          <span>Choose your Location:</span>
          <div className='w-12'>
            <Select variant="standard" label="Select place" onChange={(e) => setaddress(e)}>
              <Option value='Roshan nager  Agwanpur faridabad'>Roshan nager</Option>
              <Option value='Vinay nager'>Vinay nager</Option>
              <Option value='MICt Nager'>Mict nager</Option>
            </Select>
          </div>
        </div>
        <div className="mt-4">
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper sm:swiper-2 md:swiper-3 lg:swiper-4 xl:swiper-5"
          >
            {course.map((i) =>
              <SwiperSlide>
                <Cards name={i.name} src={i.src} des={address}></Cards>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </section>

<Roadmap></Roadmap>

      <section className='Find Best Course p-10'>
        <h2 className="text-4xl font-bold">Find Best course</h2>
        <div className="mt-4">
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper sm:swiper-2 md:swiper-3 lg:swiper-4 xl:swiper-5"
          >
            {course.map((i) =>
              <SwiperSlide>
                <Cards name={i.name} src={i.src} details={i.des} flag={false} pdf={i.data}></Cards>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Home;
