import React, { useState, useRef, useEffect } from 'react';

const Header = () => {
  const [showAdminMenu, setShowAdminMenu] = useState(false);
  const dropdownRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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
          <img src="/logo.png" alt="Children's Village Logo" className="h-12 mr-4 md:h-16" />
          <h1 className="text-2xl font-heading font-bold">Children's Village</h1>
        </div>
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
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

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-primary p-4">
          <ul className="flex flex-col space-y-2">
            <li><a href="/" className="block text-white hover:text-secondary py-2" onClick={toggleMobileMenu}>Home</a></li>
            <li><a href="/about" className="block text-white hover:text-secondary py-2" onClick={toggleMobileMenu}>About Us</a></li>
            <li><a href="/programs" className="block text-white hover:text-secondary py-2" onClick={toggleMobileMenu}>Programs</a></li>
            <li><a href="/enroll" className="block text-white hover:text-secondary py-2" onClick={toggleMobileMenu}>Enroll</a></li>
            <li><a href="/contact" className="block text-white hover:text-secondary py-2" onClick={toggleMobileMenu}>Contact</a></li>
            <li><a href="/login" className="block bg-secondary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 my-2" onClick={toggleMobileMenu}>Login</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;