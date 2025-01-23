import Landing from '../components/Landing/Landing'
import AboutUs from '../components/AboutUs/AboutUs'
import Services from '../components/Services/Services'
import MenuSummary from '../components/MenuSummary/MenuSummary'
import Contact from '../components/Contact/Contact'
import Gallery from '../components/Gallery/Gallery'

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