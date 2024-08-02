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
    <div>Contact</div>
    </>
  )
}

export default Contact