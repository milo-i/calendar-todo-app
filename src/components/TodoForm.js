import React, { useState } from 'react'

const TodoForm = (props) => {
 const { date } = props
 // My state for the input textbox
 const [todo, setTodo] = useState('')
 const [todos, setTodos] = useState([])


 // Creating my handle when user clicks the save todo button
 const handleSubmit = (e) => {
  e.preventDefault()
  if (todo) {
   console.log('Skicka todo till db');
   const todoInput = { todo, date }
   setTodos((todos) => {
    return [...todos, todoInput]
   })
   setTodo('')
   console.log(todoInput);
  } else {
   alert('Fyll i en todo')
  }

 }
 return (
  <>
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

   {console.log(date, 'hej')}
  </>
 )
}

export default TodoForm
