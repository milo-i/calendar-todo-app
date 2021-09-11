import React from 'react'



const OnClickDayTodos = ({ todosOnThisDay }) => {
 console.log(todosOnThisDay, 'todosOnThisDay rad 6');
 console.log(typeof todosOnThisDay, 'todosOnThisDay RAD 7');
 // const { todo } = todosOnThisDay;
 // console.log(todo, 'rad 9');
 // console.log(typeof todo, 'rad 10');
 return (
  todosOnThisDay.map(item => {
   console.log(item, 'rad 13');
   const { id, todo } = item;

   return (

    <li key={id}>{todo}</li>

   )
  })
 )
}


export default OnClickDayTodos

