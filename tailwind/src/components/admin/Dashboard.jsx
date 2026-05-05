import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />

        {/* Content */}
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6  ">

          <div className="bg-white shadow-lg rounded-2xl p-8 mr w-full max-w-xl text-center -mt-68">

            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="bg-gray-100 p-4 rounded-full">
                📄
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-semibold text-gray-800">
              No Active Subscription
            </h2>

            {/* Description */}
            <p className="text-gray-500 mt-2">
              You currently do not have an active plan. <br />
              Choose a plan to start using the software.
            </p>

            {/* Button */}
            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Choose Plan
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;