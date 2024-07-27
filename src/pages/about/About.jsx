import React from 'react'
import { Helmet } from 'react-helmet'

function About() {
  return (
    <>
    <Helmet>
      <title>About Katana</title>
      <link rel="canonical" href={window.location.href} />
      <meta property="og:description" content="Software Developer" />
      <meta property="og:image" content="" />
    </Helmet>
    <div>About</div>
    </>
  )
}

export default About