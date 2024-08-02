import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/autoplay";

import './SwiperHero.css'

const imagesUrl = import.meta.glob('../../../assets/HeroSlider/*.{png,jpg,jpeg,PNG,JPEG}', 
                  { eager: true, query: '?url', import: 'default' })
const images = Object.values(imagesUrl)

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
      {images.map((image, index) =>
      <SwiperSlide key={index}>
        <div
          className='slide'
          style={{
            backgroundImage : `url(${image})`,
            backgroundSize : 'cover',
            backgroundPosition: 'center',
            height: '100vh'
        }}
        />
      </SwiperSlide>
      )}
      </Swiper>
      )}


export default SwiperHero;