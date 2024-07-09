import React from 'react'
import Logo from '../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'

import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <header>
        <div className='logo'>
            <Link to="/"><img src={Logo} alt="Logo" /></Link>
        </div>

        <ul className={`menu burger ${isOpen ? 'active' : ''}`}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </ul>

        <div className='nav'>

            <nav>
                <div className='social-media'>
                    <FontAwesomeIcon icon={faFacebook}/>
                    <FontAwesomeIcon icon={faInstagram}/>
                    <FontAwesomeIcon icon={faXTwitter}/>
                    <FontAwesomeIcon icon={faGithub}/>
                </div>
            </nav>

            <div className='burger' onClick={toggleMenu}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
            
        </div>
    </header>
  )
}

export default Header