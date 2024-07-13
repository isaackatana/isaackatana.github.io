import React from 'react'
import { Helmet } from 'react-helmet'

function Courses() {
  return (
    <>
    <Helmet>
      <title>Courses</title>
      <link rel="canonical" href={window.location.href} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="" />
    </Helmet>
    <div className="courses">
      <h2>Courses</h2>
    </div>
    </>
  )
}

export default Courses