// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [actionOpen, setActionOpen] = useState(false);

  return (
    <nav className="bg-yellow-700 p-4 flex justify-between items-center text-white relative">
      {/* Left: App Name */}
      <h2 className="font-bold text-lg">SMS</h2>

      {/* Right: Single Menu Button */}
      <div className="relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="px-3 py-2 bg-yellow-800 rounded hover:bg-yellow-900 transition"
        >
          ☰
        </button>

        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-50">
            <Link
              to="/"
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/students"
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={() => setMenuOpen(false)}
            >
              Students
            </Link>

            <Link
              to="/courses"
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={() => setMenuOpen(false)}
            >
              Courses
            </Link>

            <Link
              to="/about"
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>

            {/* Action Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActionOpen(!actionOpen)}
                className="w-full text-left px-4 py-2 hover:bg-gray-200 flex justify-between items-center"
              >
                Action ▼
              </button>

              {actionOpen && (
                <div className="absolute left-0 top-full mt-0 w-48 bg-white text-black rounded shadow-lg z-50">
                  <Link
                    to="/students/new"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => {
                      setMenuOpen(false);
                      setActionOpen(false);
                    }}
                  >
                    Add Student
                  </Link>
                  <Link
                    to="/students"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => {
                      setMenuOpen(false);
                      setActionOpen(false);
                    }}
                  >
                    View Students
                  </Link>
                  <Link
                    to="/courses/new"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => {
                      setMenuOpen(false);
                      setActionOpen(false);
                    }}
                  >
                    Add Course
                  </Link>
                  <Link
                    to="/courses"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => {
                      setMenuOpen(false);
                      setActionOpen(false);
                    }}
                  >
                    View Courses
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}