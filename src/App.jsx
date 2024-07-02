import Navbar from "./Navbar/Navbar.jsx"
import Footer from "./Footer/Footer.jsx";
import CarouselFadeExample from "./Carousel/Carousel.jsx"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App()  {
  return(
    
    <Router>
      <Navbar/>
      <CarouselFadeExample/>
    </Router>
  );
}

export default App