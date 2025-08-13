import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = () => {
    return (
        <div className='p-2 border border-green-500 w-fit rounded-lg text-gray-400'>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
            <ToDoItem/>
        </div>
    )
}

export default ToDoList