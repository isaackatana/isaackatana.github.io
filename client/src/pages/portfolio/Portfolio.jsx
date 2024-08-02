import React from 'react'
import { Helmet } from 'react-helmet'

function Portfolio() {
  return (
    <>
    <Helmet>
      <title>Katana's Portfolio</title>
      <link rel="canonical" href={window.location.href} />
      <meta property="og:description" content="Software Developer" />
      <meta property="og:image" content="" />
    </Helmet>
    <div>Portfolio</div>
    </>
  )
}

export default Portfolio