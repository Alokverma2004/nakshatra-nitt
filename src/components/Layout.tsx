
import { useState, useEffect } from 'react';
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Navbar highlight effect
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100; // offset
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          document.querySelector(`a[href*=${sectionId}]`)?.classList.add('nav-active');
        } else {
          document.querySelector(`a[href*=${sectionId}]`)?.classList.remove('nav-active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a.smooth-scroll').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const targetEl = document.querySelector(href);
          if (targetEl) {
            targetEl.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-space-dark/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/nakshatra-logo.png" alt="Nakshatra Logo" className="h-8 w-auto" />
            <span className="text-2xl font-poppins font-bold text-white">Nakshatra</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => 
              `nav-link ${isActive ? 'text-white after:w-full' : 'text-gray-300'}`
            }>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              `nav-link ${isActive ? 'text-white after:w-full' : 'text-gray-300'}`
            }>
              About
            </NavLink>
            <NavLink to="/events" className={({ isActive }) => 
              `nav-link ${isActive ? 'text-white after:w-full' : 'text-gray-300'}`
            }>
              Events
            </NavLink>
            <NavLink to="/team" className={({ isActive }) => 
              `nav-link ${isActive ? 'text-white after:w-full' : 'text-gray-300'}`
            }>
              Team
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => 
              `nav-link ${isActive ? 'text-white after:w-full' : 'text-gray-300'}`
            }>
              Projects
            </NavLink>
            <NavLink to="/gallery" className={({ isActive }) => 
              `nav-link ${isActive ? 'text-white after:w-full' : 'text-gray-300'}`
            }>
              Gallery
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              `nav-link ${isActive ? 'text-white after:w-full' : 'text-gray-300'}`
            }>
              Contact
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-space-dark/95 backdrop-blur-lg">
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => `py-2 px-4 ${isActive ? 'text-space-purple' : 'text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => `py-2 px-4 ${isActive ? 'text-space-purple' : 'text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink 
                to="/events" 
                className={({ isActive }) => `py-2 px-4 ${isActive ? 'text-space-purple' : 'text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Events
              </NavLink>
              <NavLink 
                to="/team" 
                className={({ isActive }) => `py-2 px-4 ${isActive ? 'text-space-purple' : 'text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Team
              </NavLink>
              <NavLink 
                to="/projects" 
                className={({ isActive }) => `py-2 px-4 ${isActive ? 'text-space-purple' : 'text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </NavLink>
              <NavLink 
                to="/gallery" 
                className={({ isActive }) => `py-2 px-4 ${isActive ? 'text-space-purple' : 'text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `py-2 px-4 ${isActive ? 'text-space-purple' : 'text-white'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-space-darker py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/lovable-uploads/nakshatra-logo.png" alt="Nakshatra Logo" className="h-8 w-auto" />
                <h3 className="text-xl font-poppins font-bold text-white">Nakshatra</h3>
              </div>
              <p className="text-gray-400">
                The Astronomy and Science Club of NIT Trichy, exploring the universe one star at a time.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-poppins font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link to="/events" className="text-gray-400 hover:text-white transition-colors">Events</Link></li>
                <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-poppins font-bold mb-4 text-white">Connect With Us</h3>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Nakshatra - The Astronomy and Science Club, NIT Trichy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
