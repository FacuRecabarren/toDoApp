import React, { useState } from 'react'

export const EditToDoForm = ({ editTodo, task }) => {

    const [value, setValue] = useState(task.task)

    const handleSubmit = (event) =>{
        event.preventDefault();
        editTodo(value, task.id);
        setValue('')
    }

  return (
    <div className='flex justify-center items-center py-4'>
      <form className='sm:w-[20rem] flex justify-between w-[28rem] items-center gap-4' onSubmit={handleSubmit}>
          <input className='bg-transparent border-[#8E6BBF] text-[#A192A6] focus:outline-none placeholder:text-[#A192A6] border-2 w-full h-12 pl-3 flex-wrap' value={value} type='text' placeholder='Edita la tarea' onChange={(event) => setValue(event.target.value)}/>
          <button className='cursor-pointer' type='submit'><img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1689043345/tick_ok_correct_icon_231276_tjergt.png" className='shadow-sombra-imagenes w-12 p-1 bg-[#8E6BBF] rounded-full' alt="Agregar" /></button>
      </form>
    </div>
  )
}
