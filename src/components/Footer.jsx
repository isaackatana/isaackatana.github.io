import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer>
    <div>
        <p>2024 © Isaac Katana | All rights reserved.</p>
    </div>
    <div className='social-media'>
        <FontAwesomeIcon icon={faFacebook}/>
        <FontAwesomeIcon icon={faInstagram}/>
        <FontAwesomeIcon icon={faXTwitter}/>
        <FontAwesomeIcon icon={faGithub}/>
    </div>
    </footer>
  )
}

export default Footer