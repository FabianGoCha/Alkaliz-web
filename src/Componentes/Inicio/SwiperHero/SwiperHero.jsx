import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './SwiperHero.css'

const SwiperHero = () => {
  return (
  <Swiper
  spaceBetween={50}
  slidesPerView={1}
    >
      <SwiperSlide>
        <div className="slide-1" />
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-2" />
      </SwiperSlide>
  </Swiper>
  )
}

export default SwiperHero;