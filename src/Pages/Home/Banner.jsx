 // Assuming you have additional styles here
 import {Autoplay, Navigation, Pagination,  } from 'swiper/modules';

 import { Swiper, SwiperSlide } from 'swiper/react';
 import 'animate.css';
 // Import Swiper styles
 import 'swiper/css';
 import 'swiper/css/navigation';
 import 'swiper/css/pagination';
 import 'swiper/css/scrollbar';
 import banner1 from "../../assets/daniel-barnes-RKdLlTyjm5g-unsplash.jpg"
 import banner2 from "../../assets/banner1.jpg"
 import banner3 from "../../assets/lycs-architecture-kUdbEEMcRwE-unsplash (1).jpg"
import { Link } from 'react-router-dom';
 
const Banner = () => {
 

  return (
    <div className="container mx-auto  relative mt-7" >
      
  
  <Swiper   
        pagination={{
          clickable: true,
        }}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
           

        <SwiperSlide className="text-red-500">
        <div className="relative  ">
            <img src={banner1} alt="" className="h-[450px] w-full object-cover  rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-lg"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
    <h1 className=" text-3xl lg:text-5xl font-extrabold font-raleway mb-4 animate__animated animate__backInLeft">Welcome to SkyVista</h1>

    <p className="text-lg text-gray-300  mt-5 mb-8 animate__animated animate__backInRight">Where comfort meets luxury.Explore our curated collection of dream homes designed to elevate your lifestyle. Find your bliss today</p>
    <Link to={"/estate"} className="inline-block px-6 py-3 bg-[#135D66] text-white font-semibold rounded-full shadow-lg hover:bg-[#386167] transition duration-300"> Explore now</Link>
  </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
            <img src={banner2} alt="" className="h-[450px] w-full object-cover  rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black  rounded-lg"></div>
            <div  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
  
    <h1 className="text-4xl font-extrabold font-raleway mb-4 ">Discover Your Urban Sanctuary </h1>

    <p className="text-lg text-gray-300 mt-5 mb-8">Experience the epitome of modern urban living in our luxurious apartments.  Discover your urban oasis today</p>
    <Link to={"/estate"} className="inline-block px-6 py-3 bg-[#135D66] text-white font-semibold rounded-full shadow-lg hover:bg-[#386167] transition duration-300"> Explore now</Link>
  </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
            <img src={banner3} alt="" className="h-[450px] w-full object-cover  rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#03070CB3] rounded-lg"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
    <h1 className="text-4xl mt-5 font-extrabold font-raleway mb-4 ">Find Your Forever Family Home </h1>

    <p className="text-lg  text-gray-300 mt-8 mb-8">Our family sanctuaries provide a haven of peace and serenity, where every corner is filled with love and laughter. Begin your familys next chapter with us.</p>
 <Link to={"/estate"} className="inline-block px-6 py-3 bg-[#135D66] text-white font-semibold rounded-full shadow-lg hover:bg-[#386167] transition duration-300"> Explore now</Link>
  </div>
          </div>
            </SwiperSlide>
    
        </Swiper>
        <div className="swiper-button-prev p-8 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2" style={{ backgroundColor: 'black', color: 'white' }}></div>
      <div className="swiper-button-next p-8 rounded-full absolute right-0 top-1/2 transform -translate-y-1/2" style={{ backgroundColor: 'black', color: 'white' }}></div>
    
        </div>
       
   
  );
};

export default Banner;
