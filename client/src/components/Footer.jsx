import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from 'react-router-dom'
import { faFacebook, faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer>
    <div>
        <p>©2024 Isaac Katana | All rights reserved.</p>
    </div>
    <div className='social-media'>
        <Link to='facebook.com/1isaackatana' target='blank'><FontAwesomeIcon icon={faFacebook}/></Link>
        <Link to='instagram.com/1isaackatana' target='blank'><FontAwesomeIcon icon={faInstagram}/></Link>
        <Link to='instagram.com/1isaackatana' target='blank'><FontAwesomeIcon icon={faXTwitter}/></Link>
        <Link to='instagram.com/1isaackatana' target='blank'><FontAwesomeIcon icon={faGithub}/></Link>
    </div>
    </footer>
  )
}

export default Footer