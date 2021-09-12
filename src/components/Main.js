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
 // const [classColor, setClassColor] = useState('');


 const url = 'http://localhost:8000/todos';

 const clickDayHandler = (value, e) => {
  // console.log(e);
  // console.log(e.target.className, 'className');
  // console.log(e.target);
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
    // setClassColor('content-of-tile')
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


 // const shouldDateBeSelected = (date, view) => {
 //  console.log(date, 'DATUM');
 //  console.log(view, 'view');
 // }


 // const shouldDateBeSelected = ({ date }) => {
 //  // Add class to tiles in month view only
 //  console.log(date);
 //  // return 'content-of-tile';

 // };

 return (
  <>
   <Calendar
    value={date}
    onChange={setDate}
    onClickDay={clickDayHandler}
   // tileClassName={shouldDateBeSelected}

   //  ({ date }) => {
   //  if (shouldDateBeSelected(date)) {
   //   return 'content-of-tile';
   //  }
   //  return null;
   // }}
   /* https://github.com/wojtekmaj/react-calendar/issues/271
   https://www.gitmemory.com/issue/wojtekmaj/react-calendar/359/615166079
   https://stackoverflow.com/questions/60446117/how-to-mark-particular-dates-in-react-calender
   mark dates with css in react-calendar
   https://create-react-app.dev/docs/adding-a-stylesheet/

https://github.com/wojtekmaj/react-calendar/issues/473
https://github.com/wojtekmaj/react-calendar/issues/325
https://stackoverflow.com/questions/67444142/how-do-i-style-clicked-date-in-react-calendar
https://github.com/wojtekmaj/react-calendar/issues/271
https://github.com/wojtekmaj/react-calendar/issues/157
https://github.com/wojtekmaj/react-calendar/issues/94
https://github.com/wojtekmaj/react-calendar/issues/350
https://stackoverflow.com/questions/58988620/unable-to-set-a-classname-for-react-calendar
https://stackoverflow.com/questions/66257227/react-calendar-changing-colour-of-certain-days



   */
   />
   <TodoForm
    date={date}
    inputText={inputText}
    setInputText={setInputText}
    todos={todos}
    setTodos={setTodos} />
   <TodoList text={inputText}
   />
   {clickedDate ? <TodoTodayList displayTodo={displayTodo} /> : null}
  </>
 )

}
export default Main
