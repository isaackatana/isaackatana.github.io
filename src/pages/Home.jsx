import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  
  return (
    <>
    <div className='home'>
      <div className="overlay"></div>

      <div className='wrapper'>
        <div>
          <h1>Hello I'm Isaac</h1>
          <p>Software Developer</p>
        </div>
        <Link to="/about">Read more <FontAwesomeIcon icon={faArrowRight}/></Link>
      </div>

    </div>
    </>
  )
}

export default Home