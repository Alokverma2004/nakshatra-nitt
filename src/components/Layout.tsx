import { useState, useEffect, useRef } from 'react';
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Linkedin } from 'lucide-react';

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const headerRef = useRef<HTMLHeadingElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Determine if page is scrolled for header styling
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
      
      // Skip navbar highlight on pages other than home
      if (location.pathname !== '/') return;
      
      // Navbar highlight effect for sections
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100; // offset
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
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
  }, [location.pathname]);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Smooth scroll to top on navigation
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar with enhanced animations */}
      <header 
        ref={headerRef}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-space-dark/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="overflow-hidden">
              <img 
                src="/lovable-uploads/nakshatra-logo.png" 
                alt="Nakshatra Logo" 
                className="h-8 w-auto transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
            <span className="text-2xl font-poppins font-bold text-white">Nakshatra</span>
          </Link>
          
          {/* Desktop Navigation with enhanced highlight effect */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'text-white after:w-full' : 'text-gray-300'} hover:text-space-purple-light transition-colors duration-300`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'text-white after:w-full' : 'text-gray-300'} hover:text-space-purple-light transition-colors duration-300`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/events" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'text-white after:w-full' : 'text-gray-300'} hover:text-space-purple-light transition-colors duration-300`
              }
            >
              Events
            </NavLink>
            <NavLink 
              to="/team" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'text-white after:w-full' : 'text-gray-300'} hover:text-space-purple-light transition-colors duration-300`
              }
            >
              Team
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'text-white after:w-full' : 'text-gray-300'} hover:text-space-purple-light transition-colors duration-300`
              }
            >
              Projects
            </NavLink>
            <NavLink 
              to="/gallery" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'text-white after:w-full' : 'text-gray-300'} hover:text-space-purple-light transition-colors duration-300`
              }
            >
              Gallery
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'text-white after:w-full' : 'text-gray-300'} hover:text-space-purple-light transition-colors duration-300`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Mobile Menu Button with animation */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 transition-transform duration-300 hover:rotate-180"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu with animation */}
        <div 
          className={`md:hidden bg-space-dark/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          } absolute top-full left-0 w-full`}
        >
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
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        <Outlet />
      </main>

      {/* Footer with improved design */}
      <footer className="bg-space-darker py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="reveal">
              <div className="flex items-center space-x-2 mb-4">
                <img src="/lovable-uploads/nakshatra-logo.png" alt="Nakshatra Logo" className="h-8 w-auto" />
                <h3 className="text-xl font-poppins font-bold text-white">Nakshatra</h3>
              </div>
              <p className="text-gray-400">
                The Astronomy and Science Club of NIT Trichy, exploring the universe one star at a time.
              </p>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="reveal">
              <h3 className="text-xl font-poppins font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link to="/events" className="text-gray-400 hover:text-white transition-colors">Events</Link></li>
                <li><Link to="/team" className="text-gray-400 hover:text-white transition-colors">Team</Link></li>
                <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
                <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div className="reveal">
              <h3 className="text-xl font-poppins font-bold mb-4 text-white">Contact Us</h3>
              <address className="not-italic text-gray-400">
                <p>National Institute of Technology</p>
                <p>Tiruchirappalli, Tamil Nadu 620015</p>
                <p className="mt-2">Email: nakshatra@nitt.edu</p>
                <p>Phone: +91 9876543210</p>
              </address>
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
