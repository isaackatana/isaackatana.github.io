import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'
import Home from './pages/home/Home'

import { Routes, Route} from 'react-router-dom'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Portfolio from './pages/portfolio/Portfolio'
import Admin from './pages/admin/AdminDashboard'
import NotFoundPage from './pages/NotFoundPage'
import Blog from './pages/blog /Blog'
import PostContainer from './pages/blog /PostContainer'

function App() {
  
  return (
    <>
      <Header/>
      <main>
        <Routes>
        <Route path="*" element={<NotFoundPage/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/blog/articles/:id" element={<PostContainer/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
        </Routes>
      </main>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
