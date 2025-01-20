import Landing from '../Landing/Landing'
import AboutUs from '../AboutUs/AboutUs'
import Services from '../Services/Services'
import MenuSummary from '../MenuSummary/MenuSummary'
import Contact from '../Contact/Contact'
import Gallery from '../Gallery/Gallery'

function Home () {

    return (
        <main>
            <Landing />
            <AboutUs />
            <Services />
            <MenuSummary />
            <Gallery />
            <Contact />
        </main>
    )
}

export default Home