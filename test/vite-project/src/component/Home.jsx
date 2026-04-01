import React from 'react'
// rfce rfc
function Home() {
    return (
        <>
        <div className='max-w-5xl mx-auto mt-20'>
        <h1 className=' text-2xl italic font-bold  mb-4' >FOR LEARNERS</h1>
        <h2 className='text-4xl text-blue-700 font-semibold leading-tight mb-4'>Front-end and full-stack coding challenges that build real skills and help get you hired</h2>
        <p className='text-shadow-gray-600 max-w-2xl'>Frontend Mentor provides professional design-to-code challenges that mirror real-world development work. Join 1,144,617 developers building portfolio projects that impress employers.</p>
      <div className='flex gap-4 mt-6'>
       <button className='bg-red-800 text-white rounded-2xl mt-10 cursor-pointer p-2'> START BUILDING FREE </button>
       <button className=' border rounded-2xl  mt-10 cursor-pointer p-2'> BROWSE CHALLNGES</button>
        </div>
        <div >
          <img className='mt-8 shadow-2xl' src="https://www.frontendmentor.io/_next/image?url=%2Fimages%2Fhome-hero.webp&w=3840&q=100" alt="" />
        </div>
    </div>
    
        </>
    )
}

export default Home



