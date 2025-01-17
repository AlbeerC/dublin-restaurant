import './Services.css'
import { IoRestaurant } from "react-icons/io5";

function Services () {

    return (
        <section className="services container">
            <h3>Nuestros servicios</h3>
            <div className="cards-list">
                <div className="card">
                    <IoRestaurant />
                    <h4>Almuerzo</h4>
                    <p>Sabores que deleitan, ingredientes frescos y recetas únicas</p>
                </div>
                <div className="card">
                    <IoRestaurant />
                    <h4>Cena</h4>
                    <p>Un ambiente perfecto para cerrar el día con el mejor sabor</p>
                </div>
                <div className="card">
                    <IoRestaurant />
                    <h4>Take away</h4>
                    <p>Llévate tus platos favoritos, donde quieras</p>
                </div>
                <div className="card">
                    <IoRestaurant />    
                    <h4>Menú infantil</h4>
                    <p>Opciones deliciosas y divertidas para los más pequeños</p>
                </div>
            </div>
        </section>
    )

}

export default Services