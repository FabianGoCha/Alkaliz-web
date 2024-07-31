import React from 'react'
import {Outlet, NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
    <nav className="navbar">
        <div className='container'> 
        <NavLink to="/">
            <div className="logo">
                Logo
            </div>
        </NavLink>
        <div className="titulo">
            <h1>
                <NavLink to="/">Alkaliz</NavLink>
                <span>dragon</span>
            </h1>                
        </div>
      <div className="burger" onClick={() => setIsOpen(!isOpen)}>
        <div className={`burger-line ${isOpen ? 'open' : ''}`}></div>
        <div className={`burger-line ${isOpen ? 'open' : ''}`}></div>
        <div className={`burger-line ${isOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><NavLink to="/">Inicio</NavLink></li>
        <li className="dropdown">
        <NavLink to="/trabajos">Trabajos</NavLink>
          <ul className="dropdown-content">
            <li><NavLink to="/murales">Murales</NavLink></li>
            <li><NavLink to="/cuadros">Cuadros</NavLink></li>
            <li><NavLink to="/todos-los-trabajos">Todos</NavLink></li>
          </ul>
        </li>
        <li><NavLink to="/acerca">Acerca de</NavLink></li>
        <li><NavLink to="/contacto">Contacto</NavLink></li>
      </ul>
      </div>
    </nav>
    <Outlet />
    </>
  );
}

export default Navbar;