import React from 'react'

import IntroVideo from '../assets/hero/intro.mp4'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

function Portfolio() {
  return (
    <>
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="categories">
        <NavLink>Music Videos</NavLink>
        <NavLink>Web Apps</NavLink>
        <NavLink>Mobile Apps</NavLink>
      </div>
      <div className='container'>
        <div className="music-videos">
           <h2>Music Videos</h2>
          <div className="wrapper">
            <FontAwesomeIcon className='left' icon={faArrowAltCircleLeft}/>
            <FontAwesomeIcon className='right' icon={faArrowAltCircleRight}/>
            <div>
              <iframe src={IntroVideo} frameborder="0"></iframe>
            </div>
          </div>
        </div>
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