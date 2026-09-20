import { useState } from "react";
import "./Lesson.css";

function Lesson(props) {

  const lessons = [
    "Introduction to JavaScript",
    "Variables and Data Types",
    "Functions",
    "Arrays and Objects",
    "DOM Manipulation"
  ];


  const [completed, setCompleted] = useState(
    JSON.parse(localStorage.getItem("completedLessons")) || []
  );


  const completedCount = completed.length;

 
  const progress =
    0 + (completedCount * 20);


  function completeLesson(index) {

    if (!completed.includes(index)) {

      const newCompleted = [...completed, index];

      setCompleted(newCompleted);

     
      localStorage.setItem(
        "completedLessons",
        JSON.stringify(newCompleted)
      );

    
      props.setProgress(progress + 12);
    }
  }

  return (
    <div className="lesson-page">

      <h1>JavaScript Course</h1>

      <div className="progress-section">

        <h2>Course Progress</h2>

        <p>
          {completedCount} / {lessons.length} Lessons Completed
        </p>

        <p>
          {Math.round(progress)}% Completed
        </p>

        <div className="progress-container">

          <div
            className="progress-bar"
            style={{
              width: `${progress}%`
            }}
          ></div>

        </div>

      </div>

      <div className="lessons">

        <h2>Lessons</h2>

        {lessons.map((lesson, index) => (

          <div
            className="lesson-item"
            key={index}
          >

            <h3>
              {index + 1}. {lesson}
            </h3>

            {completed.includes(index) ? (

              <button
                className="completed-btn"
                disabled
              >
                ✅ Completed
              </button>

            ) : (

              <button
                className="complete-btn"
                onClick={() => completeLesson(index)}
              >
                Mark as Complete
              </button>

            )}

          </div>

        ))}

      </div>

    </div>
  );
}

export default Lesson;      