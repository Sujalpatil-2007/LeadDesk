import React from "react";

const Navbar = () => {
  return (
    <main className="w-full bg-white shadow-sm border-b">
      <div className="w-full mx-auto px-3 py-2 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">LeadDesk Mini</h1>

        <a
          href="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Admin Login
        </a>
      </div>
    </main>
  );
};

export default Navbar;
