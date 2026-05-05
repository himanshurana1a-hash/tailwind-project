import React from 'react'
import Props from './Props'
import { useState } from 'react'
function Dashboard() {
    const [count, setCount] = useState(0)

  return (
    <>
     <Props name="Himanshu" age="21" />
   <div> <h1>This counter increase every time when you clicked on  the button: {count}</h1>
    <button onClick={() => setCount(count + 1)}>Click me</button>
</div>

<div>
    <h2>This counter decrease every time when you clicked on the button :{count}</h2>
    <button onClick={() => setCount(count - 1)}>Click me</button>
    </div>
    </>


)
}

export default Dashboard