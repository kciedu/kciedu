import React, { useContext, useEffect, useState } from 'react';
import { Select, Option } from "@material-tailwind/react";
import Hero from '../components/Hero';
import Cards from '../components/Card';
import course from '../Data/Course';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../App.css';
import { Autoplay } from 'swiper/modules';
import Deatilsheader from '../components/Deatilsheader';
import { Link } from 'react-router-dom';
import Roadmap from '../components/Roadmap';
import Conatctmenu from '../components/Conatctmenu';
import { userconetxt } from '../context/Context';
import Detailslider from '../components/Detailslider';
import Kcigrowth from '../components/Kcigrowth';
import Reviews from '../components/Reviews';

function Home() {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [address, setaddress] = useState('Roshan nager  Agwanpur faridabad');
  const [countdown, setCountdown] = useState(calculateCountdown());
  const {coursedata} = useContext(userconetxt)
  const data = course.concat(coursedata)
  
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
        setSlidesPerView(4);
      } 
      else if (window.innerWidth >= 800) {
        setSlidesPerView(3);
      }
       else if (window.innerWidth >= 600) {
          setSlidesPerView(2);
        }
      
      else {
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
    <Detailslider></Detailslider>
      <section className='top programs'>
        <h2 className="text-4xl p-10 font-bold ">Explore Top Programs</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-10 place-items-center 	'>
          {data.map((i) =>
          <Link to={`/details/${i?.name || i?.Name}`} className='flex items-center shadow-lg min-w-full bg-gray-50 rounded-lg max-h-12 '>
           

              <div className="max-w-16 ">
                <img src={i?.src || i?.Image}alt={i?.name || i?.Name} className='max-h-12 '  />
              </div>
              <p className="px-6" >{i?.name || i?.Name}</p>
           
          </Link>
          )}
        </div>
      </section>
      <section className='upcoming Batches p-10'>
        <h2 className="text-4xl font-bold">Upcoming Batches : <span className=' text-red-500'>{`${countdown.hours}h ${countdown.minutes}m ${countdown.seconds}s`}</span></h2>
        <div className="branch flex items-center gap-3 flex-wrap mt-5" id='flexcols'>
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
            {data.map((i) =>
              <SwiperSlide>
                <Cards key={i?.id || i?._id} name={i?.name || i?.Name} des={i?.des || i?.Fees} src={i?.src || i?.Image} flag={true}></Cards>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </section>

<Roadmap></Roadmap>

<Reviews></Reviews>

<Kcigrowth></Kcigrowth>






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
            {data.map((i) =>
              <SwiperSlide>
               <Cards key={i?.id || i?._id} name={i?.name || i?.Name} des={i?.des || i?.Fees} src={i?.src || i?.Image} flag={false} pdf={i?.data || i?.PDF}></Cards>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Home;
