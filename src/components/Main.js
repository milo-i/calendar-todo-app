import '../index.css'
import React, { useState, useEffect } from 'react'
import Calendar from 'react-calendar'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoTodayList from './TodoTodayList'
import 'react-calendar/dist/Calendar.css';
const randomKey = require('random-key');

const Main = () => {
 // Tid states
 const [date, setDate] = useState(new Date())
 // Min state för input elementet
 const [inputText, setInputText] = useState('')
 const [todos, setTodos] = useState([]) // Skapa en array som kommer innehålla alla todo objekt
 // State som skickas in till OnClickDayTodos
 const [todoToday, setTodoToday] = useState([]);
 const [clickedDate, setClickedDate] = useState(false);
 const [displayTodo, setDisplayTodo] = useState([]);


 const url = 'http://localhost:8000/todos';

 const clickDayHandler = (value) => {
  const formatedDate = new Intl.DateTimeFormat('sv-SE').format(value);
  // console.log(typeof displayTodo, 'displayTodo');
  setDisplayTodo('');


  for (let date in todoToday) {
   // console.log(todoToday[date].date, 'rad 27');
   if (formatedDate === todoToday[date].date) {
    // console.log('matchat datum');
    // console.log(todoToday[date].todo, 'rad 31');
    let todo = todoToday[date].todo
    let dateClicked = todoToday[date].date
    setDisplayTodo((todayTodo => {
     return [...todayTodo, { dateClicked, id: randomKey.generate(5), todo }]
    }))
    setClickedDate(true);
    // console.log(todoToday, 'rad 34');
    // console.log(displayTodo, 'rad 35');

   }
  }
 }

 const getTodo = async () => {
  const response = await fetch(url);
  const todosToday = await response.json();
  setTodoToday(todosToday);
 }
 useEffect(() => {
  getTodo();

  setClickedDate(false)
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
   {clickedDate ? <TodoTodayList getTodo={getTodo} displayTodo={displayTodo} /> : null}
  </>
 )

}
export default Main
