import './App.css'
import NotFoundPage from './pages/NotFoundPage'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'
import Header from './components/Header'
import Portfolio from './pages/Portfolio'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

import { Routes, Route } from 'react-router-dom'
import Courses from './pages/Courses'

function App() {

  return (
    <>
    <Header />

    <Routes>
      <Route path='*' element={<NotFoundPage/>}/>
      <Route path='/' element= {<Home/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    
    <Newsletter/>

    <Footer/>
    </>
  )
}

export default App
