import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
// Views
import Home from './views/Home'
import Reservations from './views/Reservations'
import Menu from './views/Menu'
import AdminPanelView from './views/AdminPanelView'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/reservas' element={<Reservations /> } />
        <Route path='/menu' element={<Menu /> } />
        <Route path='/panel' element={<AdminPanelView /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
