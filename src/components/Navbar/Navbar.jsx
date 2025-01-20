import './Navbar.css'
import logo from '../../assets/logo2.png'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

function Navbar () {

    return (
        <header>
            <Link to='/'><img src={logo} alt="dublin" /></Link>

            <nav>
                <ul>
                <li><Link to='/'>Inicio</Link></li>
                    <li><a href="#about">Nosotros</a></li>
                    <li>Menú</li>
                    <li>Reservas</li>
                    <li><a href="#gallery">Galería</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>

            <Button>Reservar</Button>
        </header>
    )
}

export default Navbar