import React, { useState, useRef, useEffect } from 'react';

const Header = () => {
  const [showAdminMenu, setShowAdminMenu] = useState(false);
  const dropdownRef = useRef(null);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowAdminMenu(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <header className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Children's Village Logo" className="h-12 mr-4" />
          <h1 className="text-2xl font-heading font-bold">Children's Village</h1>
        </div>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li><a href="/" className="hover:text-secondary">Home</a></li>
            <li><a href="/about" className="hover:text-secondary">About Us</a></li>
            <li><a href="/programs" className="hover:text-secondary">Programs</a></li>
            <li><a href="/enroll" className="hover:text-secondary">Enroll</a></li>
            <li><a href="/contact" className="hover:text-secondary">Contact</a></li>
            <li className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setShowAdminMenu(!showAdminMenu)}
                className="flex items-center hover:text-secondary focus:outline-none"
              >
                <span>Admin</span>
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform ${showAdminMenu ? 'rotate-180' : ''}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
              
              {showAdminMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <a 
                    href="/login" 
                    className="block px-4 py-2 text-gray-800 hover:bg-primary hover:text-white"
                  >
                    Login
                  </a>
                  <a 
                    href="/admin/news" 
                    className="block px-4 py-2 text-gray-800 hover:bg-primary hover:text-white"
                  >
                    Manage News
                  </a>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
