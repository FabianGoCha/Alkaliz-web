import Navbar from "./Navbar/Navbar.jsx"
import Footer from "./Footer/Footer.jsx"
import Inicio from "./Inicio/Inicio.jsx"
import Acerca from "./Acerca/Acerca.jsx"
import Contacto from "./Contacto/Contacto.jsx"
import Trabajos from "./Trabajos/Trabajos.jsx"

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App()  {
  return(
     
    <Router>
        <Routes>
          <Route path='/' element={<><Navbar/> </> }>
            <Route index element={<Inicio/>} />
            <Route path="/acerca" element={<Acerca/>} />
            <Route path="/contacto" element={<Contacto/>} />
            <Route path="/trabajos" element={<Trabajos/>} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);