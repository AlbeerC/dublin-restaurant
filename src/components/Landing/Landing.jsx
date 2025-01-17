import './Landing.css'
import Button from '../Button/Button'

function Landing () {

    return (
        <section className="landing">
            <div className="texts">
                <h1>Descubre Dublín, el corazón de los buenos momentos</h1>
                <h2>Comida de calidad, ambiente cálido y un servicio impecable. Ven y vive una experiencia que querrás repetir</h2>
                <Button>Mira nuestro menú</Button>
            </div>
        </section>
    )
}

export default Landing