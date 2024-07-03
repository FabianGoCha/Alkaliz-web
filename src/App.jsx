import Navbar from "./Navbar/Navbar.jsx"
import Inicio from "./Inicio/Inicio.jsx"
import Acerca from "./Acerca/Acerca.jsx"

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "react-bootstrap";

function App()  {
  return(
    
    <Router>
        <Routes>
          <Route path='/' element={<Navbar/>}>
            <Route index element={<Inicio/>} />
            <Route path="/acerca" element={<Acerca/>} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);