// import React from "react";   
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-white font-bold text-xl">
            API Tester
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-white hover:text-indigo-200 px-3 py-2">
              Home
            </Link>
            <Link
              to="/api-tester"
              className="text-white hover:text-indigo-200 px-3 py-2"
            >
              API Tester
            </Link>
            <Link
              to="/history"
              className="text-white hover:text-indigo-200 px-3 py-2"
            >
              History
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
