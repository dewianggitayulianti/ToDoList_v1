import React from 'react'
import { VscAdd } from "react-icons/vsc";


const ToDoForm = () => {
    return (
        <div className='p-2 border w-fit border-green-500 rounded-full'>
            <input type="text" placeholder="Add a new task" className='focus:outline-none'/>
            <button className='rounded-full border border-green-500 hover:bg-green-500 hover:text-white transition-all duration-300'>
                <VscAdd className='p-1'/>
            </button>
        </div>
    )
}

export default ToDoForm