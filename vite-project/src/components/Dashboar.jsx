import React from "react";
import { Outlet } from "react-router-dom";

function Dashboar() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">

      {/* Dashboar Header */}
      <header className="px-8 py-6 border-b border-gray-800">
        <h1 className="text-3xl font-bold">
          Dashboar
        </h1>
        <p className="text-gray-400 mt-1">
          Manage your data and view insights here
        </p>
      </header>

      {/* Dashboar Content */}
      <main className="flex-1 p-8 bg-gray-900">
        <div className="bg-gray-800 rounded-2xl p-6 min-h-[300px]">
          <Outlet />
        </div>
      </main>

    </div>
  );
}

export default Dashboar;
