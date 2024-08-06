import React from 'react'
import { Helmet } from 'react-helmet'

function Contact() {
  return (
    <>
    <Helmet>
      <title>Contact Katana </title>
      <link rel="canonical" href={window.location.href} />
      <meta property="og:description" content="Software Developer" />
      <meta property="og:image" content="" />
    </Helmet>
    <div className="contact">
      <div>
        <form action="">
          <input type="text" placeholder='Name'/>
          <input type="tel" placeholder='Phone'/>
          <textarea name="" id="" placeholder='Message...'></textarea>
          <div>
            <div></div>
            <button>Send</button>
          </div>
        </form>
      </div>
      <div>

      </div>
    </div>
    </>
  )
}

export default Contact