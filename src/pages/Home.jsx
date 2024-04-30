import React from 'react'

function Home() {
  
  return (
    <div className='hero'>
      
      <div className="video-slide">

        <div className="single-video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/VyVVl_d2yZI?si=2WH3EzMeb8l9dh8E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="single-video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/a5xMtNkjz-0?list=PLrEDJjV85iv4xU8PTIG1Bq9TA6rwP1HWM" title="Sonic Tambo -THE LOST FILES : Instrumental EP" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        
      </div>

    </div>
  )
}

export default Home