import React from 'react'

const OnClickDayTodos = ({ todosOnThisDay }) => {
 return (
  <div>
   <h1>Dagens Todos</h1>
   <ul>
    {/* {todosOnThisDay.map(item => {
     const { todo } = item;
     <li>{todo}</li>
    })} */}
   </ul>
  </div>
 )
}

export default OnClickDayTodos
