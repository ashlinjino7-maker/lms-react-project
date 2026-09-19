import React from 'react'
import "./MyCourse.css"
import { Link } from 'react-router-dom'

function MyCourse(props) {
  return (
    <div className='my-course'>
      <h1>My Course</h1>
      <div className='my-course-card'>
        <h2>JavaScript</h2>
        <p><strong>Instructor</strong>:David</p>
        <p><strong>Duration</strong>:15 Hours</p>
        
        <Link to="/Lesson">
        <button>Continue Learning</button>
        </Link>
      </div>
    </div>
  )
}

export default MyCourse