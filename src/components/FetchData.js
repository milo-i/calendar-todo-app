import React, { useState, useEffect } from 'react'

const url = 'http://localhost:8000/todos';

const FetchData = ({ text }) => {
  // Min state för todos
  const [todos, setTodos] = useState([]); // Denna state är till för att visa mina todos från Fetchen

  const getTodos = async () => {
    const response = await fetch(url);
    const todos = await response.json();
    setTodos(todos)
    console.log(todos);
  }

  useEffect(() => {
    getTodos();
  }, [text]) // lägger till text propen som hittas i Main komponenten. Så när textInput ändras så kommer min fetch att hämta datan från db 

  return (
    <div>
      <ul>
        {todos.map(item => {
          const { id, todo, date } = item;
          return (
            <li key={id}>
              {todo}
              {date}</li>
          )
        })
        }
      </ul>
    </div>
  )
}

export default FetchData
