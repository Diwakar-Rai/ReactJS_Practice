import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Components/About'
import Courses from '../Components/Courses'
import Teachers from '../Components/Teachers'
import NoteApp from '../Components/NoteApp'
import Todo from '../Components/Todo'
import FuncTodo from '../Components/FuncTodo'
export const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/about' element={<About />}/>
            <Route path='/courses' element={<Courses />}/>
            <Route path='/teachers' element={<Teachers />}/>
            <Route path='/noteapp' element={<NoteApp />}/>
            <Route path='/todoapp' element={<Todo />}/>
            <Route path='/functodoapp' element={<FuncTodo />}/>
        </Routes>
    </div>
  )
}
