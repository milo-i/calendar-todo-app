import React from 'react'

const Todos = ({ todos }) => {

 return (

  todos.map(item => {
   const { id, todo, date, completed } = item;

   return (
    <li key={id}>
     {`${todo}
              ${date}
              ${completed}`}
     <button>Klar</button>
    </li>
   )
  })
 )
}

export default Todos
