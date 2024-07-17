import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Blog from '../blog/Blog'

function AdminDashboard() {
  return (
    <>
    <Helmet>
      <title>Admin Dashboard | Hi, Isaac</title>
      <link rel="canonical" href={window.location.href} />
      <meta property="og:description" content="Software Developer" />
      <meta property="og:image" content="" />
    </Helmet>
    <div className="admin-dashboard">
        <div>
          <Link to=''>Add Blogs</Link>
          <Link to=''>Blog Lists</Link>
          <Link to=''>Subscription</Link>
        </div>
    </div>
    <Blog/>
    </>
  )
}

export default AdminDashboard