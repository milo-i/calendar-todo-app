import React from 'react'
const randomKey = require('random-key');

const TodoForm = ({ date, inputText, setInputText, todos, setTodos, setClassColor }) => {


  // Skapar min handleSubmit funktion när knappen spara todo klickas
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(date);
    console.log(typeof date);

    date = new Intl.DateTimeFormat('sv-SE').format(date)
    if (inputText) {
      const todoInput = { id: randomKey.generateDigits(7), inputText, date, completed: false }
      // setClassColor('content')
      // Hanterar min Fetch POST request, den skickar in todo och datumet i objektet
      const url = 'http://localhost:8000/add'
      const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todoInput)
      };
      fetch(url, request)
        .then(response => response.json())
        .then(data => alert(data.message));

      setTodos((todo) => {
        return [...todos, todoInput]
      })
      setInputText('')
    } else {
      alert('Fyll i en todo')
    }
  }

  return (
    <article>
      <form>
        <input
          type="text"
          name="todo"
          id="todo"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder='Fyll i en todo...' />
      </form>
      <button type="submit" onClick={handleSubmit}>Spara todo</button>
    </article>
  )
}

export default TodoForm
