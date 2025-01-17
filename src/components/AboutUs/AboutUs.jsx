import './AboutUs.css'
import image from '../../assets/aboutus.webp'
import { FaPhoneAlt } from "react-icons/fa"
import Button from '../Button/Button'

function AboutUs () {

    return (
        <section className="about-us container">
                <div className="flex">
                    <div className="left">
                        <h3>Bienvenido a Dublín</h3>
                        <p>En Dublín, combinamos pasión por la cocina con un ambiente acogedor y sofisticado. Cada plato que servimos está inspirado en sabores auténticos y preparado con ingredientes frescos de la mejor calidad. Nuestro compromiso es ofrecerte no solo una comida, sino una experiencia que recordarás.</p>
                        <div className='bottom'>
                            <Button>Reservar</Button>
                            <p><FaPhoneAlt />+54 222 343434</p>
                        </div>
                    </div>

                    <img src={image} alt="" />
            </div>
        </section>
    )
}

export default AboutUs