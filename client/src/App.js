import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

function App() {

// these lines declare two state variables foodname and days using the useState hook
//foodname is initialized with an empty string and days is initialized with 0

//hooks are built in functions that allow you to use state and other react features

//the use state hoo is a function that takes one argument, the initial state, and returns an array of two elements
//the current state value
//the function that allows you to update that state

  const [foodName, setFoodName] = useState('')
  const [days, setDays] = useState(0)

  const [foodList, setFoodList] = useState([])
  //foodname and days are state variables that will hold the value of the foodname and # of days
  //since it was eaten

  //runs after the component mounts
  useEffect(() => {
    axios.get('/read').then((response)=> {
      setFoodList(response.data)
    })
  }, [])

  //makes a post request when called
  //it sends an object containing foodname and days as the request body

  // setFoodName and days are functions that are used to update the corresponfing variables when the input fields in the 
  //components rendered output are changed

  const addToList = () => {
    axios.post('/insert', {
      foodName: foodName,
      days: days
    })
    console.log(`you haven't eaten: ${foodName} in: ${ days} days `)
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
        <h1>Food List</h1>
        {foodList.map((val, key) => {
          return <div key = {key}>
            <h1>{val.foodName}</h1><h1>{val.daysSinceIAte}</h1>{" "}
          </div>
        })}
    </div>
    
  );
}
//https://zoom.us/rec/share/xendMsd_zD24RDuqW94Ae0CwgZIl_7-289HquZgvfmxuQg1G-O0OrR792wnsPOyA.rAxJHZK2_vE3_F4L

export default App;
