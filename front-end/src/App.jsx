import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'
import Home from './pages/home/Home'

import { Routes, Route } from 'react-router-dom'
import Courses from './pages/Courses'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Blog from './pages/blog/Blog'

function App() {

  fetch('http://localhost:5000/api/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));


  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </main>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
