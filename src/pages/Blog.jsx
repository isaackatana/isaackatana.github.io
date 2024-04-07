import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'
import BlogList from './BlogList'

function Blog(props) {

    const [blogs, setBlogs] = useState([
        { title:'Things to know before learning React Js', body:'Lorem ipsum ...', id: 1 },
        { title:'How to design a logo from scratch with adobe illustrator', body:'Lorem ipsum ...', id: 2 },
        { title:'Using photoshop (camera Raw) to edit photos', body:'Lorem ipsum ...', id: 3 },
        { title:'Things to know before learning Fl Studio', body:'Lorem ipsum ...', id: 4 },
        { title:'Things to know before learning Fl Studio', body:'Lorem ipsum ...', id: 4 },
    ]);

    const title = props.title;

  return (
    <section className='blog'>
        <h1>Blogs</h1>
        <div className='container'>
            <FontAwesomeIcon icon={faChevronRight} className='right'/>
            <FontAwesomeIcon icon={faChevronLeft} className='Left'/>

            <BlogList blogs={blogs}/>
        </div>
    </section>
  )
}

export default Blog