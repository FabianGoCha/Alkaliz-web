import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import './Header.css'

const Header = () => {

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return(
        <header className='header'> 
            <h1>Alkaliz</h1>
            <nav className='navbar'>
                <div className='container'>
                    <div className="Logo">
                        <a to="/">Logo</a>
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
            
        </header>
    );
}


export default Header