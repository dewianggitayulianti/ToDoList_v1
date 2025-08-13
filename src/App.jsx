import React from 'react'
import { motion } from "motion/react"
import ToDoForm from './component/ToDoForm'
import ToDoList from './component/ToDoList'
import ToDoItem from './component/ToDoItem'

const App = () => {
  return (
    <div className="app">
      <ToDoForm/>
      <ToDoList/>
    </div>
  )
}

export default App