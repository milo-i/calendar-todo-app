import React from 'react'
// import Todos from './Todos'
import FetchData from './FetchData'

const TodoList = () => {
 return (
  <>
   {/* {console.log(todos)} */}
   <FetchData />
   {/* {todos.map((todo) => (
    <Todos text={todo.inputText} date={todo.date} key={todo.id} />
   ))} */}
  </>
 )
}

export default TodoList
