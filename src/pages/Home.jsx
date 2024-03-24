import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Home(props) {
  return (
    <div className='hero'>
      <div className="background-opacity">

      </div>
      <div className='container'>
        <div className="video">
        </div>
        <div className='hero-info'>
          <div className='join-course'>
            <p>Join my online course to become a software developer</p>
            <button>Join</button>
            <FontAwesomeIcon icon={faArrowCircleRight} className='read-more'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home