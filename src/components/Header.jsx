import React from 'react'
import Logo from '../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'

import { Link } from 'react-router-dom'

function Header() {

  return (
    <header>
        <div className='logo'>
            <Link to="/"><img src={Logo} alt="Logo" /></Link>
        </div>

        <ul>
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </ul>

        <div className='menu'>

            <nav>
                <div className='social-media'>
                    <FontAwesomeIcon icon={faFacebook}/>
                    <FontAwesomeIcon icon={faInstagram}/>
                    <FontAwesomeIcon icon={faXTwitter}/>
                    <FontAwesomeIcon icon={faGithub}/>
                </div>
            </nav>

            <div className='burger'>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
            
        </div>
    </header>
  )
}

export default Header