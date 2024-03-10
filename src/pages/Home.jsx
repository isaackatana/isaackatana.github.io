import React from 'react'

function Home(props) {
  return (
    <div className='hero'>
      <div>
        <h1>Hello I'm <span>{props.name}</span></h1>
        <p>Software developer</p>
      </div>
    </div>
  )
}

export default Home