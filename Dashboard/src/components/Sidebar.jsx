import React from 'react'

function Sidebar() {
  return (
    
    <div className="w-64 bg-white shadow-md p-4">
      
      <h1 className="text-xl font-bold mb-6">BissBill</h1>
        <p className="text-gray-400 text-sm font-bold">MAIN</p>
      <ul className="space-y-3">
        <li className="text-blue-600 font-medium">Overview</li>
        <li className='text-gray-600 hover:text-black cursor-pointer font-medium'>Subscription</li>
        <li className='text-gray-600 hover:text-black cursor-pointer font-medium'>Payments</li>
      </ul>

      <div className="mt-6">
        <p className="font-bold text-sm">USER DASHBOARD</p>
        <ul className="space-y-3 mt-2">
          <li>Sales Report</li>
          <li>Inventory</li>
        </ul>
      </div>

      <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded">
        New Invoice
      </button>

    </div>
  
  )
}

export default Sidebar