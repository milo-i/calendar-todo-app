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
 // State for my classname
 const [classColor, setClassColor] = useState('');


 const url = 'http://localhost:8000/todos';

 const clickDayHandler = (value, e) => {
  console.log(e);
  console.log(e.target.className);
  console.log(e.target);
  const formatedDate = new Intl.DateTimeFormat('sv-SE').format(value);
  setDisplayTodo('');
  setClickedDate(false);


  for (let date in todoToday) {
   if (formatedDate === todoToday[date].date) {
    let todo = todoToday[date].todo
    let dateClicked = todoToday[date].date
    setDisplayTodo((todayTodo => {
     return [...todayTodo, { dateClicked, id: randomKey.generate(5), todo }]
    }))
    setClickedDate(true);
   }
  }
 }

 // const setClass = (date) => {
 //  console.log('selected');
 //  setClassColor('content');
 // }

 const getTodo = async () => {
  const response = await fetch(url);
  const todosToday = await response.json();
  setTodoToday(todosToday);
 }
 useEffect(() => {
  getTodo();

 }, [])

 return (
  <>
   <Calendar
    value={date}
    onChange={setDate}
    onClickDay={clickDayHandler}
    tileClassName={classColor}
   //   ({  }) => {
   //  if (shouldDateBeSelected(date)) {
   //   return 'content';
   //  }
   //  return null;
   // }}
   /* https://github.com/wojtekmaj/react-calendar/issues/271
   https://www.gitmemory.com/issue/wojtekmaj/react-calendar/359/615166079
   https://stackoverflow.com/questions/60446117/how-to-mark-particular-dates-in-react-calender
   mark dates with css in react-calendar
   https://create-react-app.dev/docs/adding-a-stylesheet/
   */
   />
   <TodoForm
    date={date}
    inputText={inputText}
    setInputText={setInputText}
    todos={todos}
    setTodos={setTodos}
    setClassColor={setClassColor}
   />
   <TodoList text={inputText}
   />
   {clickedDate ? <TodoTodayList displayTodo={displayTodo} /> : null}
  </>
 )

}
export default Main
