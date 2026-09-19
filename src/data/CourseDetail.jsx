import React, { useState } from 'react'
import courses from '../pages/Courses'
import { useParams } from 'react-router-dom'
import './CourseDetail.css'

function CourseDetail() {
    const { id } = useParams();

    const course = courses.find((course) =>{
        return course.id == Number(id)
    })

    if (!course) {
        return <h2>Course Not Found</h2>
    }
    const[Enroll,setEnroll]=useState(false)
    function EnrollNow(){
        setEnroll(true)
    }

    return (
        <div className='jino'>
            <h2>{course.title}</h2>
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p><strong>Category:</strong> {course.category}</p>
            <p><strong>Duration: </strong>{course.duration}</p>
            <h3>₹{course.price}</h3>

            <h3>About This Course</h3>
            <p>Learn {course.title} from Beginner to Advance Level</p>
            <h3>What you will learn</h3>
            <ul className='ash'>
                
                <li>Basic Concept</li>
                <li>Pratical Examples</li>
                <li>Real World Project</li>
                <li>Advance Concept</li>
                
            </ul>
            {!Enroll && (<button className='jk' onClick={setEnroll}>Enroll Now</button>)
            }
            {Enroll && (<h3>You are Enrolled {course.title} course🎉🎊</h3>)}
            
        </div>
    )
}

export default CourseDetail