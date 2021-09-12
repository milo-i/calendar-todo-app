import React, { useEffect } from 'react'
import OnClickDayTodos from './OnClickDayTodos'

const TodoTodayList = ({ displayTodo }) => {
 console.log(displayTodo, 'RAD 6 TodoTodayList');

 useEffect(() => {
  console.log('render');
 }, [displayTodo])

 return (
  <div>
   <h1>Todos för {displayTodo[0].dateClicked}</h1>
   <ul>
    <OnClickDayTodos displayTodo={displayTodo} />
   </ul>
  </div>
 )
}

export default TodoTodayList
