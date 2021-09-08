import React, { useState } from 'react'
import Calendar from 'react-calendar'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import 'react-calendar/dist/Calendar.css';


const Main = () => {
 // States
 const [date, setDate] = useState(new Date())
 // Min state för input elementet
 const [inputText, setInputText] = useState('')
 const [todos, setTodos] = useState([]) // Skapa en array som kommer innehålla alla todo objekt


 return (
  <>
   <Calendar
    value={date}
    onChange={setDate} />
   <TodoForm
    date={date}
    inputText={inputText}
    setInputText={setInputText}
    todos={todos}
    setTodos={setTodos} />
   {/* <TodoList todos={todos} /> */}
   <TodoList text={inputText} />
  </>
 )
}

export default Main
