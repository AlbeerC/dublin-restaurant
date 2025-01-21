import './Navbar.css'
import logo from '../../assets/logo2.png'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'

function Navbar () {
    const [showMenu, setShowMenu] = useState(false)

    const handleToggle = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header>
            <div className="nav-mobile">
                <Link to='/'><img src={logo} alt="dublin" /></Link>
                <button onClick={handleToggle}><FaBars className='hide toggle'/></button>
            </div>

            <nav className={showMenu ? 'show' : 'hide'}>
                <ul>
                <li><Link to='/'>Inicio</Link></li>
                    <li><a href="#about">Nosotros</a></li>
                    <li><a href="#gallery">Galería</a></li>
                    <li><a href="#contact">Contacto</a></li>
                    <li>Menú</li>
                </ul>
            </nav>

            <Button>Reservar</Button>
        </header>
    )
}

export default Navbar