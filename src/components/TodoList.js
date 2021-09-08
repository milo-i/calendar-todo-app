import React from 'react'
// import Todos from './Todos'
import FetchData from './FetchData'

const TodoList = ({ text }) => {
 return (
  <>
   <FetchData text={text} />
  </>
 )
}

export default TodoList
