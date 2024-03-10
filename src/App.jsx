import './App.css'

import Footer from './components/Footer'
import Newsletter from './components/Newsletter'
import Blog from './components/Blog'
import Header from './components/Header'

import Home from './pages/Home'
import Portfolio from './pages/Portfolio'

function App() {

  return (
    <>
    <Header />

    <Home name = "Isaac"/>

    <Portfolio/>

    <Blog/>

    <Newsletter/>

    <Footer/>
    </>
  )
}

export default App
