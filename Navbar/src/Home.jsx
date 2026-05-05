import React from 'react'

function Home() {
  return (
  <div className='bg-gray-700'>
    <nav className=' bg-white shadow '>
<header className='flex '>
    <span className=' '>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtsJ74s2ud6hQKNi3hT4-YAwUF14xGldXwxA&s" alt="logo"  className='w-25 h-25'/> 
    </span>
<span>
<IoMenu />
</span>

<ul className='  items-center  md:flex gap-5 '>
    <li className='mx-4 my-6 md:my-0 '>
        <a href="#" className='text-xl hover:text-gray-500 duration-500'>HOME</a>
    </li>
    <li>
        <a href="#" className='text-xl hover:text-gray-500 duration-500'>SERVICES</a>
    </li>
    <li>
        <a href="#" className='text-xl hover:text-gray-500 duration-500'>ABOUT</a>
    </li>
    <li>
        <a href="#" className='text-xl hover:text-gray-500 duration-500'>CONTACT</a>
    </li>
    <li>
        <a href="#" className='text-xl hover:text-gray-500 duration-500'>BLOG'S </a>
    </li>
        <button className='bg-gray-500 text-white font-[Poppins] duration-500 py-2 px-6 rounded mx-4 hover:bg-gray-800
        cursor-pointer'>
          Get Started
        </button>
</ul>
</header>
    </nav>
  </div>
  )
}

export default Home