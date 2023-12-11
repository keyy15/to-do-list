import React, { useState } from 'react'
import { IoIosAdd } from 'react-icons/io'

const getRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const App = () => {
  const [showInput, setShowInput] = useState(false)
  const [todoText, setTodoText] = useState('')
  const [todos, setTodos] = useState([])
  const [backgroundColor, setBackgroundColor] = useState('')

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      const newTodo = {
        text: todoText,
        color: backgroundColor
      }
      setTodos([...todos, newTodo])
      setTodoText('')
      setShowInput(false)
      setBackgroundColor(getRandomColor())
    }
  }

  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <h2 className='w-[80%] h-full p-4 border-b'>Sticky Wall</h2>
      <div className='w-[80%] h-full flex flex-wrap justify-between p-4 gap-2'>
        {todos.map((todo, index) => (
          <div
            key={index}
            className='w-[240px] h-[240px] flex flex-col items-center justify-center rounded-xl'
            style={{ backgroundColor: todo.color }}
          >
            <h2 className='text-2xl'>{todo.text}</h2>
          </div>
        ))}
        {showInput ? (
          <div className='w-[240px] h-[240px] rounded-xl flex flex-col items-center justify-center bg-zinc-400 border mb-4 gap-2'>
            <input
              type='text'
              value={todoText}
              onChange={e => setTodoText(e.target.value)}
              placeholder='Enter your to-do'
              className='p-2 border rounded-md focus:outline-none'
            />
            <button onClick={handleAddTodo} className='p-1 bg-teal-400 text-white px-6 rounded'>Add Todo</button>
          </div>
        ) : (
          <div
            className='w-[240px] h-[240px] rounded-xl flex flex-col items-center justify-between bg-zinc-400 border cursor-pointer mb-4'
            onClick={() => setShowInput(true)}
          >
            <div className='flex items-center justify-center w-full h-full'>
              <IoIosAdd className='text-3xl bg-teal-400 rounded' />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
