import{ useEffect , useState  } from 'react'
import React from 'react'

function App() {
 const [count, setCount] = useState(0);
   
 useEffect(() => {
  console.log("count changed to", count);
 }, [count]);

  return (
    <div>
      <h1>count :{count}</h1>
      <button className='border bg-blue-500 text-white' onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default App;