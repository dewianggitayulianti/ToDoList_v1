import React from 'react'

const ToDoItem = () => {
    return (
        <div className='flex w-full hover:bg-green-50 p-1'>
            <div className='text-black'>Tugas 1</div>
            <input type='checkbox'/>
        </div>
    )
}

export default ToDoItem