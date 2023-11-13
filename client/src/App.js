import React, { useState } from 'react'
import './App.css';

function App() {

  const [foodName, setFoodName] = useState('')
  const [days, setDays] = useState(0)

  const addToList = () => {
    console.log(foodName + days)
  }
  return (
    <div className="App">
      <h1> CRUD App with MERN</h1>
        <label>Food Name:</label>
        <input type="text" onChange={(event) => {setFoodName(event.target.value);
        }} />
        <label>Days Since Ive Eaten:</label>
        <input type="number" onChange={(event) => {setDays(event.target.value);
        }}/>
        <button onClick={addToList}>Add to List</button>
    </div>
  );
}

export default App;
