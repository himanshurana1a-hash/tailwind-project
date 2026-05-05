import React, { use } from 'react'
import { useState , useCallback , useEffect , useRef} from 'react'

function App() {
  const [length , setLength] = React.useState(8)
  const[numberAllowed , setNumberAllowed] = React.useState(false)
  const[chracterAllowed , setCharacterAllowed] = React.useState(false)
 const[password , setPassword] = React.useState('')


 // useRef is used to store the function reference and avoid unnecessary re-renders when the function is defined inside the component.
const passwordRef = useRef(null)
 const passwordGenerator = useCallback(() => {
  let pass = ""
  let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str += "0123456789"
  if(chracterAllowed) str += "!@#$%^&*()_+"

  for(let i = 1 ; i <= length ; i++){
  let char = Math.floor(Math.random() * str.length + 1)
 pass +=  str.charAt(char) 
  }
  setPassword(pass)
 } ,[length , numberAllowed , chracterAllowed, setPassword])
  
 const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, 101); // For mobile devices 
  window.navigator.clipboard.writeText(password)
},[password])
  

useEffect(() => 
  {passwordGenerator()
},[length , numberAllowed , chracterAllowed,
  passwordGenerator]) 
  

  return (
    <div className='w-full max-w-md mx-auto  shadow-md rounded-lg
     px-4 my-8 text-orange-500  bg-gray-700 '>
      <h1 className='text-white text-center my-3  '>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text" 
        value={password}
      className='outline-non w-full py-1 px-3 bg-white'
      placeholder='password'
      readOnly
      ref={passwordRef}
      
      />
      <button onClick={copyPasswordToClipboard} className=' outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0 pointer-cursor  active:bg-red-500 active:scale-95 transition  duration-300 ease-in-out'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" 
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) =>{setLength(e.target.value)}}
         />
        <label>Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id="NumberInput"
          onChange={() => {setNumberAllowed(prev => !prev)
          }}
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
          type="checkbox"
          defaultChecked={chracterAllowed}
          id="CharacterInput"
          onChange={() => {
            setCharacterAllowed(prev => !prev)
          }}
        />
        <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
      </div>
  )
}

export default App