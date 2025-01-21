import './Gallery.css'
import img1 from '../../assets/gallery/1.jpg'
import img2 from '../../assets/gallery/2.jpeg'
import img3 from '../../assets/gallery/3.jpg'
import img4 from '../../assets/gallery/4.jpeg'
import img5 from '../../assets/gallery/5.jpeg'
import img6 from '../../assets/gallery/6.jpg'

function Gallery () {

    const images = {
        img1,
        img2,
        img3,
        img4,
        img5,
        img6
    }

    return (
        <section className="gallery container" id='gallery'>
            <h2>Galería</h2>
            <div className="flex">
                {Object.keys(images).map((img, index) => (
                    <img key={index} src={images[img]} alt={`Imagen restaurante`} />
                ))}
            </div>
        </section>
    )
}

export default Gallery