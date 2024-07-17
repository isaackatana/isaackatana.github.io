import React from 'react'
import { Link } from 'react-router-dom'

function AdminDashboard() {
  return (
    <>
    <div className="admin-dashboard">
        <div>
          <Link to=''>Add Blogs</Link>
          <Link to=''>Blog Lists</Link>
          <Link to=''>Subscription</Link>
        </div>
    </div>
    </>
  )
}

export default AdminDashboard