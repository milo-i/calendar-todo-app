import React, { useState, useEffect } from 'react'

const Todos = ({ todos, getTodos }) => {
  const [clickedBtn, setclickedBtn] = useState(false); /* Sätter en state för knapparna. Så när knappen "Ändra status på todo" klickas så ändras false till true. Så 
  i min useEffect så använder jag setclickedBtn för att ändra tillbaka till false efter jag kallat på min getTodos funktion*/

  const todoDoneHandler = (e) => {
    // console.log(todos, 'todos');
    todos.map(todo => {
      if (e.target.id === todo.id) {

        const url = 'http://localhost:8000/completed'
        const request = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: todo.id, completed: !todo.completed })
        };
        fetch(url, request)
          .then(response => response.json())
          .then(todo =>
            // console.log(todo, 'rad 21')
            setclickedBtn(true),
          );
      }
      return todo
    })
  }

  useEffect(() => {
    getTodos();
    setclickedBtn(false) // Se kommentar i början av Todos komponenten, rad 4 och 5.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickedBtn])

  return (
    todos.map(item => {
      const { id, todo, date, completed } = item;

      return (
        <li key={id}>
          {`${todo}
       ${date}
       ${completed ? 'Klar' : 'Ej klar'}`}
          <button id={id} onClick={todoDoneHandler}>Ändra status på todo</button>
        </li>
      )
    })
  )
}

export default Todos
