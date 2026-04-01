import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

let [counter, setCounter] = useState(15)
  // let counter = 50

const addValue = () =>{
// console.log("clicked", counter);
// counter = counter +  1
setCounter(counter+1)

}
const decreaseValue = () => {
  setCounter(counter-1)
}
  return (
    <>
      <h1>counter project</h1>
      <h2>counter value:{counter}</h2>
      <button 
      onClick={addValue}
      >Add value{counter}</button>
      <br />
      <button
      onClick={decreaseValue}
      >decrease value{counter}</button>
     <p>fooeter : {counter }</p>
         </>
  )
}

export default App
