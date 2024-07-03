import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel';
import woman from '../assets/Murales/bwoman.jpeg';
import majora from '../assets/figuras/majora.jpeg';
import './Carousel.css'

function CarouselFadeExample() {
  return (
    <div className='Carrusel' > 
      <h4>Trabajos Realizados</h4> 
      <Carousel> 
        <Carousel.Item interval={2500}> 
          <img 
            className="d-block w-100"
            src={woman}
            alt="Image One"
          /> 
          <Carousel.Caption> 
            <h3>Murales</h3> 
            <p>Se realizan todo tipo de diseños</p> 
          </Carousel.Caption> 
        </Carousel.Item> 
        <Carousel.Item interval={500}> 
          <img 
            className="d-block w-100"
            src={majora}
            alt="Image Two"
          /> 
          <Carousel.Caption> 
            <h3>Pintado de Figuras</h3> 
            <p>Cualquier escultura, impresión 3d, etc</p> 
          </Carousel.Caption> 
        </Carousel.Item> 
      </Carousel> 
    </div> 
  );
}

export default CarouselFadeExample;