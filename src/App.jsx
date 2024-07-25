import Navbar from "./Componentes/Navbar2/Navbar2.jsx"
import Footer from "./Componentes/Footer/Footer.jsx"
import Inicio from "./Componentes/Inicio/Inicio.jsx"
import Acerca from "./Componentes/Acerca/Acerca.jsx"
import Contacto from "./Componentes/Contacto/Contacto.jsx"
import Trabajos from "./Componentes/Trabajos/Trabajos.jsx"

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