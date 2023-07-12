import React, { useEffect, useState } from 'react'
import { ToDoForm } from '../Form/ToDoForm/ToDoForm'
import { v4 as uuidv4 } from "uuid";
import { ToDo } from '../ToDo/ToDo';
import { EditToDoForm } from '../Form/ToDoEditForm/ToDoEditForm';
import { Header } from '../Header/Header';
import { ToDoFormDisabled } from '../Form/ToDoForm/ToDoFormDisabled';
const LOCAL_STORAGE_KEY = "todo:savedtasks";

export const Home = () => {
  const [todos, setTodos] = useState([]);

  const loadSavedTodos = () =>{
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    console.log(saved);
    if(saved){
      setTodos(JSON.parse(saved))
    }
  }

  useEffect(() =>{
    loadSavedTodos();
  }, []);
  
  const setTodosAndSave = (newTasks) =>{
    setTodos(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  const addTodo = (todo) => {
    setTodosAndSave([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  }

  const toggleComplete = (id) =>{
    setTodosAndSave(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  const deleteTodo = (id) =>{
    setTodosAndSave(todos.filter((todo) => todo.id !== id));
  } 
    

  const editTodo = (id) =>{
    setTodosAndSave(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }

  const editTask = (task, id) => {
    setTodosAndSave(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  return (
    <div className='h-screen flex flex-col items-center pt-10'>
        {todos.length < 4 ? (
          <ToDoForm addTodo={addTodo}/>
        ) : (
          <ToDoFormDisabled/>
        )}
        
        {todos.map((todo, index) =>(
          todo.isEditing ? (
            <EditToDoForm editTodo={editTask} task={todo} key={index}/>
          ) : (
            <ToDo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
          )
        ))}
    </div>
  )
}
