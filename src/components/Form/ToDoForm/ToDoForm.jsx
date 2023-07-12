import React, { useState } from 'react'

export const ToDoForm = ({ addTodo }) => {

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
          <input className='bg-transparent border-[#8E6BBF] text-white focus:outline-none placeholder:text-[#DED0F2] placeholder:text-opacity-70 border-2 w-full h-12 pl-3 flex-wrap' maxLength={150} value={value} type='text' placeholder='Agrega una tarea' onChange={(event) => setValue(event.target.value)}/>
          <button className='cursor-pointer flex justify-center items-center' type='submit'><img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1689042347/plus_add_new_icon_231258_fjn61r.png" className='shadow-sombra-imagenes w-12 p-1 bg-[#8E6BBF] rounded-full' alt="Agregar" /></button>
      </form>
    </div>
  )
}
