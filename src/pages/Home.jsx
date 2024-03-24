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
          <iframe width="560" height="315" src="https://www.youtube.com/embed/VyVVl_d2yZI?si=YQ1p6lM5G3qSSEzN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <div className='hero-info'>
          
        </div>

        <div className='join-course'>
          <p>Join my online course to become a software developer</p>
          <button>Join</button>
          <FontAwesomeIcon icon={faArrowCircleRight} className='read-more'/>
        </div>
      </div>
    </div>
  )
}

export default Home