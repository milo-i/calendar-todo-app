import React from 'react'

const OnClickDayTodos = ({ displayTodo }) => {
 return (
  displayTodo.map(item => {
   console.log(item, 'rad 13');
   const { id, todo } = item;

   return (
    <li key={id}>{todo}</li>
   )
  })
 )
}


export default OnClickDayTodos

