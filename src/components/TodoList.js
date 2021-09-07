import React from 'react'
// import Todos from './Todos'
import FetchData from './FetchData'

const TodoList = ({ text }) => {
 return (
  <>
   {/* {console.log(todos)} */}
   <FetchData text={text} />
   {/* {todos.map((todo) => (
    <Todos text={todo.inputText} date={todo.date} key={todo.id} />
   ))} */}
  </>
 )
}

export default TodoList
