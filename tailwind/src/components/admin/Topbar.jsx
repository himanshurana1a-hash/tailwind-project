import React from "react";

function Topbar() {
  return (
    <div className="bg-white p-4 shadow flex justify-between items-center">

      <input
        type="text"
        placeholder="Search..."
        className="border px-4 py-2 rounded w-1/3"
      />

      <div className="flex items-center gap-4">
        <span>🔔</span>

        <div className="flex items-center gap-2">
          <div className="bg-green-500 text-white w-8 h-8 flex items-center justify-center rounded-full">
            S
          </div>
          <div>
            <p className="text-sm font-medium">Himanshu</p>
            <p className="text-xs text-gray-500">
              himanshurana1a@gmail.com
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Topbar;