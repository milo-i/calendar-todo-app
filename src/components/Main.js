import '../index.css'
import moment from 'moment'
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

   const getTodo = async () => {
      const response = await fetch(url);
      const todosToday = await response.json();
      setTodoToday(todosToday);
   }
   useEffect(() => {
      getTodo();

   }, [])

   // const getDatesFromTodos = async () => {
   //    const response = await fetch(url);
   //    const todos = await response.json();
   //    const sortedTodos = todos.sort((a, b) => new Date(a.date) - new Date(b.date))
   //    setTodos(sortedTodos)
   // }


   const mark = [
      '14-09-2021',
      '22-09-2021',
      '10-10-2021'
   ]

   return (
      <>
         <Calendar
            value={date}
            onChange={setDate}
            onClickDay={clickDayHandler}
            tileContent={({ date, view }) => {
               if (mark.find(x => x === moment(date).format("DD-MM-YYYY"))) {
                  return 'x'
               }
            }}
         // tileContent={

         //    ({ date, view }) => view === 'month' && date.getDay() === 0 ? <p>It's Sunday!</p> : null

         //    // ({ date, view }) => view === 'month' && date.getDay() === 6 ? <p>It's Sunday!</p> : null
         // }




         // tileClassName={shouldDateBeSelected}

         //  ({ date }) => {
         //  if (shouldDateBeSelected(date)) {
         //   return 'content-of-tile';
         //  }
         //  return null;
         // }}

         />
         <TodoForm
            date={date}
            inputText={inputText}
            setInputText={setInputText}
            todos={todos}
            setTodos={setTodos} />
         <TodoList text={inputText} />
         {clickedDate ? <TodoTodayList displayTodo={displayTodo} /> : null}
      </>
   )

}
export default Main
