
import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

function Home(props) {
  
  return (
    <div className='home'>
      <h1>Learn new skill</h1>
      <p>Learn Programming, web Development, and more with our online course</p>
      <Link to="/Courses">
      <button >Explore Course</button>
      </Link>
    </div>
  )
}

export default Home
