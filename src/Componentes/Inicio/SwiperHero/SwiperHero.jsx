import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/autoplay";

import './SwiperHero.css'


const SwiperHero = () => {
  return (
  <Swiper
  spaceBetween={50}
  slidesPerView={1}
  loop={true}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
  modules={[Autoplay, Pagination]}
  className='heroSlider'
    >
      <SwiperSlide>
        <div className="slide1" >  
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide2">  
        </div> 
      </SwiperSlide>
    </Swiper>
  )
}

export default SwiperHero;