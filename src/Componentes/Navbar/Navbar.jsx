import { useState } from 'react'
import { Outlet , NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import './Navbar.css'

const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return(
          <> 
           <nav className='navbar'>
                <div className='container'>
                    <NavLink to="/">
                        <div className="logo">
                            Logo
                        </div>
                    </NavLink>
                    <div className="titulo">
                        <h1>
                            <NavLink to="/">Alkaliz</NavLink>
                            <span>
                                dragon
                            </span>
                        </h1>
                        
                    </div>
                    <div className='menu-icon' onClick={handleShowNavbar}>
                        <GiHamburgerMenu size={40} color='white'/>
                    </div>
                    <div className={`nav-elements  ${showNavbar && 'active'}`}>    
                        <ul>
                            <li>
                                <NavLink to="/">Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/acerca">Acerca de</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contacto">Contacto</NavLink>
                            </li>
                            <li>
                                <NavLink to="/trabajos">Trabajos</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className= "topBlur" />
            <div className="bottomBlur" />
            <Outlet />
            </>
    );      
}


export default Navbar