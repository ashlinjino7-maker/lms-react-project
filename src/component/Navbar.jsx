import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
        <h2 className='logo'>LMS</h2>
        <div className='one'>
    <a href='/'>Home</a>
    <a href='/Courses'>Course</a>
    <a href='/myCourse'>My Course</a>
    <Link to="/Profile">Profile</Link>
    
    </div>
</nav>
  )
}

export default Navbar