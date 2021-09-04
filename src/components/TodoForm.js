import React, { useState } from 'react'

const TodoForm = (props) => {
 const { date } = props
 // My state for the input textbox
 const [todo, setTodo] = useState('')
 const [todos, setTodos] = useState([]) // Create an array that will contain all the todo objects


 // Creating my handle when user clicks the save todo button
 const handleSubmit = (e) => {
  e.preventDefault()
  if (todo) {
   console.log('Skicka todo till db');
   const todoInput = { todo, date }

   const url = 'https://reqres.in/api/posts'

   const request = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todoInput)
   };

   fetch(url, request)
    .then(response => response.json())
    .then(data => console.log(data, 'data RAD 27'));

   setTodos((todos) => {
    return [...todos, todoInput]
   })
   setTodo('')
  } else {
   alert('Fyll i en todo')
  }
 }


 return (
  <article>
   <form>
    <input
     type="text"
     name="todo"
     id="todo"
     value={todo}
     onChange={(e) => setTodo(e.target.value)}
     placeholder='Fyll i en todo...' />
   </form>
   <button type="submit" onClick={handleSubmit}>Spara todo</button>
  </article>
 )
}

export default TodoForm
