import React from 'react'
import Logo from '../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'

function Header() {
    
  return (
    <header>
        <div className='logo'>
            <img src={Logo} alt="Logo" />
        </div>

        <ul>
        </ul>

        <div className='menu'>
            <nav>
                <div className='social-media'>
                    <FontAwesomeIcon icon={faFacebook}/>
                    <FontAwesomeIcon icon={faInstagram}/>
                    <FontAwesomeIcon icon={faXTwitter}/>
                    <FontAwesomeIcon icon={faGithub}/>
                </div>

                <div className='user-acc'>
                    <button id='login'>Login</button>
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