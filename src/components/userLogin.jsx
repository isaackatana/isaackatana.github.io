import React from 'react'
import { useState } from 'react';

function userLogin() {

    const [showLoginForm, setShowLoginForm] = useState(true);
    const [showRegistrationForm, setShowRegistrationForm] = useState(false);

    const switchToLoginForm = () => {
        setShowLoginForm(true);
        setShowRegistrationForm(false);
    };

    const switchToRegistrationForm = () => {
        setShowLoginForm(false);
        setShowRegistrationForm(true);
    };

    const handleClose = () => {
        set(false)
    };

    // ===================================

    const [isOpen, setIsOpen] = useState(true);

    const openPopup = () => {
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
    };

  return (
    <div>
        {isOpen && (
            <div className='login-popup'>
            
                <FontAwesomeIcon icon={faXmark} className="close-btn" onClick={closePopup}/>

                {showLoginForm && (
                    <div className='login'>
                        <h2>Login</h2>
                        <form action="" id='login'>
                            <input type="email" placeholder='Email' required/>
                            <input type="password" placeholder='Password' required/>
                            <div className='action'>
                                <div><input type="checkbox"/><p>Remember me</p></div>
                                <button>Login</button>
                            </div>
                        </form>
                        <div className='switch-form'><p>Don't have an account</p><a onClick={switchToRegistrationForm}>Register</a></div>
                    </div>
                )}
                
                {showRegistrationForm && (
                    <div className='register'>
                        <h2>Register</h2>
                        <form action="" id='register'>
                            <input type="text" placeholder='First Name' required/>
                            <input type="text" placeholder='Last Name' required/>
                            <input type="email" placeholder='Email' required/>
                            <input type="password" placeholder='Password'required/>
                            <input type="password" placeholder='Confirm Password' required/>
                            <div className='action'>
                                <div className='checkbox'><input type="checkbox"/><p>Subscribe</p></div>
                                <button>Register</button>
                            </div>
                        </form>
                        <div className='switch-form'><p>Already have an account</p><a onClick={switchToLoginForm}>Login</a></div>
                    </div>
                )}
                
            </div>
        )}
    </div>
  )
}

export default userLogin