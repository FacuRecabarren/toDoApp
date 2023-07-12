import React, { useState } from 'react'

export const ToDoFormDisabled = ({ addTodo }) => {

    const [value, setValue] = useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
        addTodo(value);
        setValue('')
    }

  return (
    <div className='flex-col justify-center items-center py-4'>
      <div className='flex justify-center items-center py-10'>
        <h1 id='title' className='sm:text-2xl m-0 text-[#F2F2F2]'>¡Anota las <span className='text-[#8E6BBF] italic'>metas</span> del día!</h1>
      </div>
      <form className='sm:w-[20rem] flex justify-between w-[28rem] items-center gap-4' onSubmit={handleSubmit}>
          <h1 className='text-[#D6ACF2] w-full h-10 pl-3 text-center text-lg flex justify-center items-center'>Limite de tareas alcanzado</h1>
          <button disabled className='cursor-pointer' type='submit'><img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1689042347/plus_add_new_icon_231258_fjn61r.png" className='shadow-sombra-imagenes w-12 p-1 bg-[#8E6BBF] rounded-full' alt="Agregar" /></button>
      </form>
    </div>
  )
}