import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
// Views
import Home from './components/views/Home'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
