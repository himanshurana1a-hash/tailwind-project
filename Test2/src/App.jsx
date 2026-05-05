import React from 'react'
import Demo from './components/Demo'
function App() {
  const name = "Himanshu"
  const age = 25;
  return (
    <div>
      <h1>Welcome to the App</h1>
     <Demo username={name} userAge={age} />
    </div>
    
  );
}


export default App;
