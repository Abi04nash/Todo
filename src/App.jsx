import { useEffect, useState } from 'react'

import { TodoProvider } from './context'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'


function App() {

  const [todos , setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id : Date.now() , ...todo} , ...prev] )
  }


  useEffect(() => {
    window.particlesJS("particles-container", {
      particles: {
        number: { value: 40 },
        color: { value: "#ffffff" },
        shape: { type: "star" },
        opacity: { value: 0.5 },
        size: { value: 2 },
        move: { enable: true, speed: 3 },
        line_linked: { enable: false }, 
      },
      background: { color: "#000" },
    });
  }, []);


  const updatedTodo = (id , todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) =>{
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo , completed : !prevTodo.completed} : prevTodo))
  }


// Local Storage
  useEffect(() =>{
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  } , [])

  useEffect(() => {
    localStorage.setItem("todos" , JSON.stringify(todos))
  } , [todos])




  return (
    
    
    <TodoProvider id="particles-container" value={{todos,addTodo , updatedTodo , deleteTodo , toggleComplete}}>
      <div id="particles-container"  className="bg-slate-950 min-h-screen py-8">
        <div id="particles-container" className="bg-slate-950 w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-purple-100">
          <h1 className="text-3xl font-bold text-center mb-8 mt-2 animate-pulse drop-shadow-[0_0_3px_#00ffcc]">Manage Your Work💼</h1>
          <div id="particles-container" className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
              className='w-full'>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>

  )
}

export default App
