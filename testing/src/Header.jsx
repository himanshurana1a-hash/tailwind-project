import React from 'react'
import { useState } from 'react'

function Header () {
  const [open, setOpen] = useState(false);

  return (
     <div className='flex'>
        <div className={`fixed top-0 left-0 h-screen bg-gray-800 text-white p-5 transform transition-transform duration-300 ${open ? "translate-x-0 w-84" : "-translate-x-full w-64"
          }`}>
            
          <h2 className='text-xl font-bold mb-4'>Menu</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
          <button onClick={() => setOpen(!open)} className='text-white hover:text-gray-300 border border-xl py-2 px-4 rounded-md mb-4'>
              Close Sidebar
            </button>
        </div>

        <div className='flex-1 p-5'>
          <button onClick={() => setOpen(!open)}
            className='bg-blue-500 text-white px-4 py-2 rounded'>
            {open ? "Close Sidebar" : "Open Sidebar"}
          </button>
      
        </div>
      </div>

  );
}

export default Header;