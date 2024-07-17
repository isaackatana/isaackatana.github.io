import React from 'react'
import { Helmet } from 'react-helmet'

function PostContainer() {
  return (
    <>
    <Helmet>
      <title>Post Container</title>
      <link rel="canonical" href={window.location.href} />
      <meta property="og:description" content="Software Developer" />
      <meta property="og:image" content="" />
    </Helmet>
    <div className="post-container">
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, a?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, molestias. Exercitationem voluptate, natus dicta expedita ducimus eum iure, eos totam, perspiciatis ut dolor culpa error quo officiis animi dolorum nulla?</p>
        <img src="" alt="" />
        <iframe src="https://www.youtube.com/embed/LxcmF_Kk0Ho?list=PLrEDJjV85iv60M0AiFshvi7Xq3g3F48LJ" title="D-Berry - SO FINE  ft.Floh Namelok &amp; Gamerboy (lyric Visualizer)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    </>
  )
}

export default PostContainer