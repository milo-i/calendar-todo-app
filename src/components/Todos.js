import React from 'react'

const Todos = ({ text, date, id }) => {
 return (
  <div>
   <li key={id}>{`${text} ${date}`}</li>
   <button>Klar</button>
   <button>Ta bort</button>
  </div>
 )
}

export default Todos
