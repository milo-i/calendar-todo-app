import React, { useState, useEffect } from 'react'
import Todos from './Todos';

const url = 'https://react-calendar2021.herokuapp.com/todos';

const FetchData = ({ text }) => {
  // Min state för todos
  const [todos, setTodos] = useState([]); // Denna state är till för att visa mina todos från Fetchen

  const getTodos = async () => {
    const response = await fetch(url);
    const todos = await response.json();
    const sortedTodos = todos.sort((a, b) => new Date(a.date) - new Date(b.date))
    setTodos(sortedTodos)
  }

  useEffect(() => {
    getTodos();

  }, [text]) // lägger till text propen som hittas i Main komponenten. Så när textInput ändras så kommer min fetch att hämta datan från db

  return (
    <div>
      <h3>Mina Todos</h3>
      <ul>
        <Todos todos={todos} getTodos={getTodos} />
      </ul>
    </div>
  )
}

export default FetchData
