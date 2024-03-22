import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Portfolio() {
  return (
    <section className='portfolio'>
        <h1>Porfolio</h1>
        <div className='container'>
          <FontAwesomeIcon icon={faChevronRight} className='right'/>
          <FontAwesomeIcon icon={faChevronLeft} className='Left'/>
          <div className='s-project'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/VyVVl_d2yZI?si=0IQJRwxTxLRRXVPG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
    </section>
  )
}

export default Portfolio