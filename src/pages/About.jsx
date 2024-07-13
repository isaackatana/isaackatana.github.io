import React from 'react'
import { Helmet } from 'react-helmet'

function About() {
  return (
    <>
    <Helmet>
      <title>About</title>
      <link rel="canonical" href={window.location.href} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="" />
    </Helmet>
    <div className="about">
      <h2>About</h2>
      <div className="container">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam inventore assumenda dolor delectus doloremque nulla, libero odio quis explicabo ratione reiciendis vitae veritatis quam, omnis deleniti accusamus voluptatum repudiandae accusantium.</p>
      </div>
    </div>
    </>
  )
}

export default About