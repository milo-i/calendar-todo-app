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
   const [markedDates, setMarkedDates] = useState([]);


   const url = 'https://cors-anywhere.herokuapp.com/https://react-calendar2021.herokuapp.com/todos';

   const clickDayHandler = (value) => {
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

   const getTodo = async () => {
      const response = await fetch(url);
      const todosToday = await response.json();
      setTodoToday(todosToday);
   }

   const getDatesFromTodos = async () => {
      const response = await fetch(url);
      const todos = await response.json();

      for (let dateMarked in todos) {
         setMarkedDates(markedDates => {
            return [...markedDates, todos[dateMarked].date]
         })
      }
   }

   useEffect(() => {
      getTodo();
   }, [])

   useEffect(() => {

      getDatesFromTodos();
   }, [todos])



   return (
      <>
         <Calendar
            value={date}
            onChange={setDate}
            onClickDay={clickDayHandler}
            // tileContent={({ date }) => {
            //    if (markedDates.find(x => x === moment(date).format("YYYY-MM-DD"))) {
            //       return 'x'
            //    }
            // }}
            tileClassName={({ date }) => {
               if (markedDates.find(x => x === moment(date).format("YYYY-MM-DD"))) {
                  return 'content'
               }
            }}

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
