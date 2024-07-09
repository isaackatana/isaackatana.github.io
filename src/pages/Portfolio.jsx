import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import MusicVideos from '../components/categories/MusicVideos'

function Portfolio() {
  return (
    <>
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="categories">
        <NavLink to='/categories/music-videos'>Music Videos</NavLink>
        <NavLink to='/categories/web-apps'>Web Apps</NavLink>
        <NavLink to='/categories/mobile-apps'>Mobile Apps</NavLink>
      </div>
      <div className='container'>
          <Routes>
            <Route path='/categories/music-videos' element={<MusicVideos/>}/>
          </Routes>
        
        {/* <div className="music-videos">
          <h2>Web Apps</h2>
          <div className="wrapper">
            <div>
              <iframe src={IntroVideo} frameborder="0" mute></iframe>
            </div>
          </div>
        </div>
        <div className="music-videos">
          <h2>Mobile Apps</h2>
          <div className="wrapper">
            <div>
              <iframe src={IntroVideo} frameborder="0" mute></iframe>
            </div>
          </div>
        </div> */}
      </div>
    </div>
    </>
  )
}

export default Portfolio