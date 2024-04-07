import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function LoginPopup() {
  return (
    <div className='login-popup'>
        
        <div className='login'>
            <FontAwesomeIcon icon={faXmark} className='close-popup'/>
            <h2>Login</h2>
            <form action="" id='login'>
                <input type="email" placeholder='Email' required/>
                <input type="password" placeholder='Password' required/>
                <div className='action'>
                    <div><input type="checkbox"/><p>Remember my account</p></div>
                    <button>Login</button>
                </div>
            </form>
        </div>
        <div className='register'>
            <FontAwesomeIcon icon={faXmark} className='close-popup'/>
            <h2>Register</h2>
            <form action="" id='register'>
                <input type="text" placeholder='First name' required/>
                <input type="text" placeholder='Last name' required/>
                <input type="email" placeholder='Email' required/>
                <input type="password" placeholder='Password'required/>
                <input type="password" placeholder='Confirm Password' required/>
                <div className='action'>
                    <div><input type="checkbox"/><p>Subscribe to newletters</p></div>
                    <button>Register</button>
                </div>
            </form>
        </div>
        
    </div>
  )
}

export default LoginPopup
