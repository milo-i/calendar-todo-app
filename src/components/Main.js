import React, { useState } from 'react'
import Calendar from 'react-calendar'
import TodoForm from './TodoForm'


const Main = () => {
 const [date, setDate] = useState(new Date())

 return (
  <>
   <Calendar
    value={date}
    onChange={setDate} />
   <TodoForm
    date={date} />
   {console.log(date)}
  </>
 )
}

export default Main
