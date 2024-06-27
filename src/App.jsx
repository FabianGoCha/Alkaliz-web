import Header from "./Header/Header.jsx"
import Footer from "./Footer/Footer.jsx";
import CarouselFadeExample from "./Carousel/Carousel.jsx"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App()  {
  return(
    
    <Router>
    <Header/>
    <CarouselFadeExample/>
    <Footer/>
    </Router>
  );
}

export default App