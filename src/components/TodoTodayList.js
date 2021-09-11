import React from 'react'
import OnClickDayTodos from './OnClickDayTodos'

const TodoTodayList = ({ todosOnThisDay }) => {
 return (
  <div>
   <h1>Dagens todos</h1>
   <ul>
    <OnClickDayTodos todosOnThisDay={todosOnThisDay} />
   </ul>
  </div>
 )
}

export default TodoTodayList
