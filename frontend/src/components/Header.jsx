import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const logout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    setUser({ username: null, email: null, token: null });
    navigate('/login');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="bg-gray-800 shadow-lg p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left side: Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                width="40"
                height="40"
                className="text-yellow-400"
              >
                <path
                  fill="#ffc063"
                  d="M32 2C15.87 2 2 15.87 2 32s13.87 30 30 30 30-13.87 30-30S48.13 2 32 2zm0 58C16.56 60 4 47.44 4 32S16.56 4 32 4s28 12.56 28 28-12.56 28-28 28z"
                />
                <path
                  fill="#ffc063"
                  d="M44 32h-8v8c0 2.21-1.79 4-4 4s-4-1.79-4-4v-8h-8c-2.21 0-4-1.79-4-4s1.79-4 4-4h8V16c0-2.21 1.79-4 4-4s4 1.79 4 4v8h8c2.21 0 4 1.79 4 4s-1.79 4-4 4z"
                />
              </svg>
              <span className="ml-3 text-2xl font-bold">HabitTracker</span>
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-white border-b-2 border-yellow-400 pb-1'
                  : 'text-gray-400 hover:text-yellow-400 transition duration-300'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-white border-b-2 border-yellow-400 pb-1'
                  : 'text-gray-400 hover:text-yellow-400 transition duration-300'
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'text-white border-b-2 border-yellow-400 pb-1'
                  : 'text-gray-400 hover:text-yellow-400 transition duration-300'
              }
            >
              Contact
            </NavLink>
            {user.email && (
              <>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-white border-b-2 border-yellow-400 pb-1'
                      : 'text-gray-400 hover:text-yellow-400 transition duration-300'
                  }
                >
                  Profile
                </NavLink>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-white border-b-2 border-yellow-400 pb-1'
                      : 'text-gray-400 hover:text-yellow-400 transition duration-300'
                  }
                >
                  Dashboard
                </NavLink>
              </>
            )}
          </nav>

          {/* Hamburger Icon for Mobile Menu */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          {/* Right side: Login/Logout Button */}
          <div className="hidden md:block">
            {!user.email ? (
              <button
                onClick={() => navigate('/login')}
                className="text-yellow-400 border border-yellow-400 hover:bg-yellow-500 hover:text-gray-800 px-4 py-2 rounded-md transition duration-300 shadow-md"
              >
                Login
              </button>
            ) : (
              <button
                onClick={logout}
                className="text-white bg-red-600 hover:bg-red-500 px-4 py-2 rounded-md transition duration-300 shadow-md"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-gray-700 text-white p-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'block py-2 text-white border-b-2 border-yellow-400'
                : 'block py-2 text-gray-400 hover:text-yellow-400'
            }
            onClick={toggleMobileMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'block py-2 text-white border-b-2 border-yellow-400'
                : 'block py-2 text-gray-400 hover:text-yellow-400'
            }
            onClick={toggleMobileMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'block py-2 text-white border-b-2 border-yellow-400'
                : 'block py-2 text-gray-400 hover:text-yellow-400'
            }
            onClick={toggleMobileMenu}
          >
            Contact
          </NavLink>
          {user.email && (
            <>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? 'block py-2 text-white border-b-2 border-yellow-400'
                    : 'block py-2 text-gray-400 hover:text-yellow-400'
                }
                onClick={toggleMobileMenu}
              >
                Profile
              </NavLink>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? 'block py-2 text-white border-b-2 border-yellow-400'
                    : 'block py-2 text-gray-400 hover:text-yellow-400'
                }
                onClick={toggleMobileMenu}
              >
                Dashboard
              </NavLink>
            </>
          )}
          <div className="mt-4">
            {!user.email ? (
              <button
                onClick={() => navigate('/login')}
                className="w-full text-yellow-400 border border-yellow-400 hover:bg-yellow-500 hover:text-gray-800 px-4 py-2 rounded-md transition duration-300 shadow-md"
              >
                Login
              </button>
            ) : (
              <button
                onClick={logout}
                className="w-full text-white bg-red-600 hover:bg-red-500 px-4 py-2 rounded-md transition duration-300 shadow-md"
              >
                Logout
              </button>
            )}
          </div>
        </nav>
      )}
    </>
  );
}

export default Header;
