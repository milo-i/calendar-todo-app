import { useState, useEffect } from 'react'

const Todos = ({ todos, getTodos }) => {
  const [clickedBtn, setclickedBtn] = useState(false); /* Sätter en state för knapparna. Så när knappen "Klar" klickas så ändras false till true. Så 
  i min useEffect så använder jag setclickedBtn för att ändra tillbaka till false efter jag kallat på min getTodos funktion*/

  const todoDoneHandler = (e) => {
    todos.map(todo => {
      if (e.target.id === todo.id) {

        const url = 'https://react-calendar2021.herokuapp.com/completed'
        const request = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: todo.id, completed: !todo.completed })
        };
        fetch(url, request)
          .then(response => response.json())
          .then(todo =>
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
  }, [clickedBtn, todos]) // KOLLA HÄR

  return (
    todos.map(item => {
      const { id, todo, date, completed } = item;


      return (

        <li key={id}>
          Min todo: {`${todo} ||| Datum: 
       ${date} ||| Slutförd: 
       ${completed ? 'Klar' : 'Ej klar'}`}
          <button id={id} onClick={todoDoneHandler}>{`${completed ? 'Ej klar' : 'Klar'}`}</button>
        </li>

      )
    })
  )
}

export default Todos
