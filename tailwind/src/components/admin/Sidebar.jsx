import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-white h-full shadow-md p-4 flex flex-col justify-between">

      <div>
        <h1 className="text-2xl font-bold text-blue-600 mb-6">
          BissBill
        </h1>

        <p className="text-xs text-gray-400 mb-6">
          SMART BILLING
        </p>

        <nav className="space-y-2">
          <Link to="/dashboard/overview" className="block p-2 bg-blue-100 rounded">
            Overview
          </Link>
          <Link to="/dashboard/subscription" className="block p-2 hover:bg-gray-100 rounded">
            Subscription
          </Link>
          <Link to="/dashboard/payments" className="block p-2 hover:bg-gray-100 rounded">
            Payments
          </Link>

          <p className="text-xs text-gray-400 mt-4">USER DASHBOARD</p>

          <Link to="/dashboard/sales-report" className="block p-2 hover:bg-gray-100 rounded">
            Sales Report
          </Link>
          <Link to="/dashboard/inventory" className="block p-2 hover:bg-gray-100 rounded">
            Inventory
          </Link>
        </nav>
      </div>

      <div>
        <button className="w-full bg-blue-600 text-white py-2 rounded mb-4">
          New Invoice
        </button>

        <p className="text-sm text-gray-500">Settings</p>
        <p className="text-sm text-gray-500">Logout</p>
      </div>
    </div>
  );
}

export default Sidebar;