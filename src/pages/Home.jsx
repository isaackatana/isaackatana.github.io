import React from 'react'

function Home({name}) {
  
  return (
    <div className='hero'>

      <div className="background-opacity">

      </div>
      
      <div className='hero-info'>
        <h1>Hello I'm <span>{name}</span></h1>
        <p>I teach how to make the web and how to make it look good.</p>
      </div>-

    </div>
  )
}

export default Home