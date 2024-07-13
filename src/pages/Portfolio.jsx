import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import MusicVideos from '../components/portfolio/categories/MusicVideos'
import { Helmet } from 'react-helmet'

import publicImg from "../assets/hero/img1.jpg"

function Portfolio() {
  const categories = [
    {
      link: '',
    },
  ]
  return (
    <>
    <Helmet>
      <title>Portfolio</title>
      <link rel="canonical" href={window.location.href} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="" />
      <meta property="og:image" content={publicImg} />
    </Helmet>
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