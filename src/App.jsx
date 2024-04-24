import './App.css'

import Footer from './components/Footer'
import Newsletter from './components/Newsletter'
import Blog from './pages/Blog'
import Header from './components/Header'
import userLogin from './components/userLogin'

import Home from './pages/Home'

function App() {

  return (
    <>
    <userLogin/>

    <Header />

    <Home name = "Isaac"/>

    <Blog/>

    <Newsletter/>

    <Footer/>
    </>
  )
}

export default App
