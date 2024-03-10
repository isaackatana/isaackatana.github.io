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
            <iframe src="https://www.behance.net/embed/project/65393817?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
          </div>
        </div>
    </section>
  )
}

export default Portfolio