
import CarouselFadeExample from "./Carousel/Carousel.jsx";
import SwiperHero from "./SwiperHero/SwiperHero.jsx";
import { Hero } from "./Hero/Hero";

const Inicio = () => {
    return( 
        <>
        <div className="hero-container">
        <SwiperHero/>
        <Hero/>       
        </div>
        <div className="content-container">
        <CarouselFadeExample />
        </div>
        </>
    );
  }
  
  export default Inicio;