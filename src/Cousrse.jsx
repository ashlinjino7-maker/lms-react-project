import CourseCard from "./component/CourseCard";
import courses from "./pages/Courses";
import React from 'react'
import './Course.css'


function Cousrse () {
  return (
    <div className="three">
        <h1 className="jin">All Courses</h1>
        <div className="four">
              {
                courses.map((course) => {
                  return (
                    <CourseCard
                      key={course.id}
                      id={course.id}
                      title={course.title}
                      instructor={course.instructor}
                      category={course.category}
                      duration={course.duration}
                      price={course.price}
                    />
                  );
                })
              }
              </div>
            </div>
  )
}

export default Cousrse