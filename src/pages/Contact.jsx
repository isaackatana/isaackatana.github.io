import React from 'react'
import { Helmet } from 'react-helmet'

function Contact() {
  return (
    <>
    <Helmet>
    <title>Contact</title>
      <link rel="canonical" href={window.location.href} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="" />
      <meta property="og:image" content=""/>
    </Helmet>
    <div className="contact">
      <h2>Contact</h2>
    </div>
    </>
  )
}

export default Contact