import React, { useState, useEffect } from 'react'

const url = 'http://localhost:8000/todos';

const FetchData = () => {
 // Min state för todos
 const [todos, setTodos] = useState([]);


 const getTodos = async () => {
  const response = await fetch(url);
  const todos = await response.json();
  setTodos(todos)
  console.log(todos);
  console.log(typeof todos);
 }

 useEffect(() => {
  getTodos();
 }, [])

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
