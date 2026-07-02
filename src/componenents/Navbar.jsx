import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to track if the mobile menu is open

  // Base Tailwind classes for all NavLinks
  const navLinkClasses = "px-3 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-violet-700 hover:text-white";

  // Function to determine active/inactive styles
  const getNavLinkClass = ({ isActive }) =>
    `${navLinkClasses} ${isActive ? "bg-violet-600 text-white border-b-2 border-green-300" : "text-violet-800"}`;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-100 shadow-xl border-b-4 border-indigo-500 sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Brand (Always Visible) */}
          <NavLink to="/" className="flex-shrink-0" onClick={() => setIsOpen(false)}>
            <div className='text-3xl text-red-700 font-extrabold italic border-r-4 border-red-700 pr-2'>JSP</div>
          </NavLink>

          {/* Desktop Menu (Hidden on Small Screens) */}
          <div className="hidden sm:flex space-x-2 lg:space-x-4 font-medium text-lg items-center">
            {/* NavLink for 'JSP' is the Logo, so we start with the next link */}
            <NavLink to="/courses" className={getNavLinkClass}>Courses</NavLink>
            <NavLink to="/centers" className={getNavLinkClass}>Centers</NavLink>
            <NavLink to="/joinus" className={getNavLinkClass}>Career</NavLink>
            <NavLink to="/contact" className={getNavLinkClass}>Contact</NavLink>
            <NavLink to='/about' className={getNavLinkClass}>About</NavLink>
          </div>

          {/* Hamburger Button (Visible ONLY on Small Screens) */}
          <div className="sm:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className="inline-flex items-center justify-center p-2 rounded-md text-violet-800 hover:text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Conditionally Rendered and positioned) */}
      {isOpen && (
        <div 
          className="sm:hidden absolute right-0 w-1/2 bg-gray-800 z-10 shadow-2xl pb-2 transition-transform duration-300 ease-in-out"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* The base class for mobile links is different to fill the width */}
            <NavLink 
              to="/courses" 
              onClick={toggleMenu} 
              className={({ isActive }) => 
                `${isActive ? "bg-violet-600 text-white" : "text-gray-300"} 
                block px-3 py-2 rounded-md text-base font-medium text-right
                hover:bg-violet-700 hover:text-white transition duration-300`
              }
            >
              Courses
            </NavLink>
            <NavLink to="/centers" onClick={toggleMenu} className={({ isActive }) => `${isActive ? "bg-violet-600 text-white" : "text-gray-300"} block px-3 py-2 rounded-md text-base font-medium text-right hover:bg-violet-700 hover:text-white transition duration-300`}>Centers</NavLink>
            <NavLink to="/joinus" onClick={toggleMenu} className={({ isActive }) => `${isActive ? "bg-violet-600 text-white" : "text-gray-300"} block px-3 py-2 rounded-md text-base font-medium text-right hover:bg-violet-700 hover:text-white transition duration-300`}>Careers</NavLink>
            <NavLink to="/contact" onClick={toggleMenu} className={({ isActive }) => `${isActive ? "bg-violet-600 text-white" : "text-gray-300"} block px-3 py-2 rounded-md text-base font-medium text-right hover:bg-violet-700 hover:text-white transition duration-300`}>Contact</NavLink>
            <NavLink to='/about' onClick={toggleMenu} className={({ isActive }) => `${isActive ? "bg-violet-600 text-white" : "text-gray-300"} block px-3 py-2 rounded-md text-base font-medium text-right hover:bg-violet-700 hover:text-white transition duration-300`}>About</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
