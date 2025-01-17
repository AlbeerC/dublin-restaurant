import './Navbar.css'
import logo from '../../assets/logo2.png'
import Button from '../Button/Button'

function Navbar () {

    return (
        <header>
            <img src={logo} alt="dublin" />

            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Nosotros</li>
                    <li>Menú</li>
                    <li>Reservas</li>
                    <li>Galería</li>
                    <li>Contacto</li>
                </ul>
            </nav>

            <Button>Reservar</Button>
        </header>
    )
}

export default Navbar