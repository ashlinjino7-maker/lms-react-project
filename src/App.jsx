import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from "./component/Navbar";
import Home from "./data/Home";


import CourseDetail from './data/CourseDetail';
import MyCourse from './data/MyCourse';
import Cousrse from './Cousrse';
import Lesson from './data/Lesson';
import Profile from './data/Profile';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/courses"
          element={<Cousrse/>
           
          }
    />

        <Route
          path="/courses/:id"
          element={<CourseDetail />}
        />
        <Route
        path='/Lesson'
        element={<Lesson/>}/>
         <Route
      path='myCourse'
      element={<MyCourse/>}/>
      <Route
      path='/Profile'
      element={<Profile/>}/>
      </Routes>


     
    </BrowserRouter>
  );
}

export default App;