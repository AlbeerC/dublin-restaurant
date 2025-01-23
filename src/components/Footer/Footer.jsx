import './Footer.css'
import { Link } from 'react-router-dom'

function Footer () {

    return (
        <footer>
            <p>© 2025 - Todos los derechos reservados</p>
            <p>Desarollado por Alberto Caminos</p>
            <Link to='/panel'>Admin</Link>
        </footer>
    )
}

export default Footer