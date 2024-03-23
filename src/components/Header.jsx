import React from 'react'
import Logo from '../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'

function Header(props) {
  return (
    <header>
        <div className='logo'>
            <img src={Logo} alt="Logo" />
        </div>

        <nav>
            <ul>
                <li className='active' >Home</li>
                <li>Blog</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>

        <div className='social-media'>
            <FontAwesomeIcon icon={faFacebook}/>
            <FontAwesomeIcon icon={faInstagram}/>
            <FontAwesomeIcon icon={faXTwitter}/>
            <FontAwesomeIcon icon={faGithub}/>
        </div>

        <div className='burger'>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
        </div>

    </header>
  )
}

export default Header