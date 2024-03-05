
import { faFacebook, faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import Logo from './assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Home from './pages/Home'

function App() {

  return (
    <>
      <div>

        <header>

          <div className='logo'>
            <img src={Logo} alt="Logo" />
          </div>

          <nav>
            <ul>
              <li className='active' >Home</li>
              <li>Portfolio</li>
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

        <main>
          <Home/>
        </main>

        <section className='blog-posts'>
          <h1>Blog</h1>
          <div className='container'>
            <div className='s-post'>
              <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Technology_Trends.jpg" alt="" />
              <div>
                <h4>Tech Tips: WiFi can be used to hack your phone</h4>
                <div>
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              </div>
            </div>
            <div className='s-post'>
              <img src="https://i0.wp.com/kenyayote.com/wp-content/uploads/2018/01/Bonfire-Adventures-travel-agency-in-kenya.jpg?ssl=1" alt="" />
              <div>
                <h4>Holiday Tips: Places to visit when in africa </h4>
                <div>
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='newsletter'>
          <div className="subscribe">
            <p>Subscribe to my mailing list</p>
            <div>
              <input type="email" name="" id="" placeholder='Your Email'/><button>Subscribe</button>
            </div>
          </div>
        </section>

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

      </div>
    </>
  )
}

export default App
