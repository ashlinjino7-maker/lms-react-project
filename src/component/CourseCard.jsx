
import React from 'react'
import './CourseCard.css'
import { Link } from "react-router-dom"

function CourseCard(props)
{
  return (
    <div className='two'>
      <h2>{props.title}</h2>
      <p>Instructor: {props.instructor}</p>
      <p>Category: {props.category}</p>
      <p>Duration: {props.duration}</p>
      <h3>₹{props.price}</h3>

      <Link to={"/courses/" + props.id}>
        <button>View Course</button>
      </Link>
    </div>
    
  )
}

export default CourseCard

