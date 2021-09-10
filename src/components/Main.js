import React, { useState, useEffect } from 'react'
import Calendar from 'react-calendar'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import OnClickDayTodos from './OnClickDayTodos'
import 'react-calendar/dist/Calendar.css';


const Main = () => {
 // Tid states
 const [date, setDate] = useState(new Date())
 // Min state för input elementet
 const [inputText, setInputText] = useState('')
 const [todos, setTodos] = useState([]) // Skapa en array som kommer innehålla alla todo objekt
 // State som skickas in till OnClickDayTodos
 const [todoToday, setTodoToday] = useState([]);
 const [clickedDate, setClickedDate] = useState(false);

 const url = 'http://localhost:8000/todos';


 const clickDayHandler = (value) => {
  const formatedDate = new Intl.DateTimeFormat('sv-SE').format(value);
  // console.log(formatedDate, 'klickad dag');
  // console.log(value, 'VALUE');

  const getTodo = async () => {
   const response = await fetch(url);
   const todos = await response.json();

   // console.log(todos, 'rad 27');

   for (let date in todos) {
    // console.log(todos[date].date, 'rad 33');
    if (formatedDate === todos[date].date) {
     console.log('matchat datum');
     console.log(todos[date].todo, 'rad 36');
     setTodoToday({ todo: todos[date].todo })
     setClickedDate(true);
     < OnClickDayTodos todosOnThisDay={todoToday} />

     // console.log(typeof todoToday, 'rad 38');
     console.log(todoToday, 'rad 39');
    }
   }

  }
  getTodo();

  // < OnClickDayTodos todosOnThisDay={todoToday} />

 }


 useEffect(() => {
  clickDayHandler()
  setClickedDate(false);
 }, [])


 return (
  <>
   <Calendar
    value={date}
    onChange={setDate}
    onClickDay={clickDayHandler} />
   <TodoForm
    date={date}
    inputText={inputText}
    setInputText={setInputText}
    todos={todos}
    setTodos={setTodos} />
   <TodoList text={inputText} />
   {/* <OnClickDayTodos todoToday={todoToday} /> */}
  </>
 )
}

export default Main
