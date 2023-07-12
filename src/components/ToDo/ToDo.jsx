import React from 'react'

export const ToDo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='flex justify-center items-center py-4'>
      <div className='sm:w-[20rem] sm:gap-0 flex justify-between items-center w-[28rem] gap-4'>
        <div className='sm:w-[13rem] w-[20rem] h-12 shadow-sombra-imagenes flex justify-start items-center p-4 bg-[#8E6BBF]'>
          <p className={`${task.completed ? "w-full overflow-hidden text-[#200726] line-through duration-300 flex-wrap" : "w-full overflow-hidden text-white duration-300 flex-wrap"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        </div>
        <div className='flex justify-center items-center gap-4'>
            <img src='https://res.cloudinary.com/dreso9ye9/image/upload/v1689041179/pen_pencil_write_edit_icon_231248_jlrd9o.png' className='shadow-sombra-imagenes w-10 cursor-pointer p-1 bg-[#8E6BBF] rounded-full' onClick={() => editTodo(task.id)}/>
            <img src='https://res.cloudinary.com/dreso9ye9/image/upload/v1689041176/trash_can_rubbish_paper_bin_icon_231279_uckng2.png' className='shadow-sombra-imagenes w-10 cursor-pointer p-1 bg-[#8E6BBF] rounded-full' onClick={() => deleteTodo(task.id)}/>
        </div>
      </div>
    </div>
  )
}
