import './Header.css'

function Header() {

    return(
        <header className='header'> 
            <h1>Alkaliz</h1>
            <div className="Logo"><a href="#">Logo</a></div>
            <nav>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Acerca de</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#">Trabajos</a></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );
}


export default Header