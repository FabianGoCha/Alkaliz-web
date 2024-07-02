import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import './Navbar.css'

const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return(
            <nav className='navbar'>
                <div className='container'>
                    <div className="logo">
                        <a to="/">Logo</a>
                    </div>
                    <div className="titulo">
                        <h1>
                            <a to="/">Alkaliz</a>
                            <span>
                                dragon
                            </span>
                        </h1>
                        
                    </div>
                    <div className='menu-icon' onClick={handleShowNavbar}>
                        <GiHamburgerMenu size={50}/>
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
    );
}


export default Navbar