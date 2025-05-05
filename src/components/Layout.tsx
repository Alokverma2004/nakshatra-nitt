
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

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

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
          <Link to="/" className="flex items-center group">
            <div className="overflow-hidden">
              <img 
                src="/lovable-uploads/17c8b972-7058-4743-930b-750bcc504672.png" 
                alt="Nakshatra Logo" 
                className="h-10 w-auto transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
            {/* Removed Nakshatra text as requested */}
          </Link>
          
          {/* Desktop Navigation with enhanced highlight effect */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'text-white after:w-full' : 'text-gray-300'} hover:text-space-blue-light transition-colors duration-300`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'text-white after:w-full' : 'text-gray-300'} hover:text-space-blue-light transition-colors duration-300`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/events" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'text-white after:w-full' : 'text-gray-300'} hover:text-space-blue-light transition-colors duration-300`
              }
            >
              Events
            </NavLink>
            <NavLink 
              to="/team" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'text-white after:w-full' : 'text-gray-300'} hover:text-space-blue-light transition-colors duration-300`
              }
            >
              Team
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'text-white after:w-full' : 'text-gray-300'} hover:text-space-blue-light transition-colors duration-300`
              }
            >
              Projects
            </NavLink>
            <NavLink 
              to="/gallery" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'text-white after:w-full' : 'text-gray-300'} hover:text-space-blue-light transition-colors duration-300`
              }
            >
              Gallery
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'text-white after:w-full' : 'text-gray-300'} hover:text-space-blue-light transition-colors duration-300`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Mobile Menu Button with animation */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 transition-transform duration-300 z-50"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu with enhanced slide-in animation - improved for better functionality */}
        <div 
          className={`md:hidden fixed inset-0 bg-space-darker/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } pt-20 z-40`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => `py-4 px-4 text-xl border-b border-gray-800 ${isActive ? 'text-space-blue' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `py-4 px-4 text-xl border-b border-gray-800 ${isActive ? 'text-space-blue' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              to="/events" 
              className={({ isActive }) => `py-4 px-4 text-xl border-b border-gray-800 ${isActive ? 'text-space-blue' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Events
            </NavLink>
            <NavLink 
              to="/team" 
              className={({ isActive }) => `py-4 px-4 text-xl border-b border-gray-800 ${isActive ? 'text-space-blue' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Team
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => `py-4 px-4 text-xl border-b border-gray-800 ${isActive ? 'text-space-blue' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink 
              to="/gallery" 
              className={({ isActive }) => `py-4 px-4 text-xl border-b border-gray-800 ${isActive ? 'text-space-blue' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `py-4 px-4 text-xl border-b border-gray-800 ${isActive ? 'text-space-blue' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
            
            <div className="pt-8 flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <Facebook className="h-7 w-7" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <Instagram className="h-7 w-7" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <Linkedin className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        <Outlet />
      </main>

      {/* Improved Modern Footer with better visibility */}
      <footer className="bg-gradient-to-t from-[#020610] via-[#051529] to-[#081f3d] border-t border-space-blue/30 relative z-10">
        <div className="container mx-auto pt-16 pb-10 px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {/* Brand and Description */}
            <div className="md:col-span-5 space-y-6">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/17c8b972-7058-4743-930b-750bcc504672.png" 
                  alt="Nakshatra Logo" 
                  className="h-12 w-auto"
                />
                <div>
                  <h3 className="text-2xl font-poppins font-bold text-white">Nakshatra</h3>
                  <p className="text-blue-300 text-sm">The Astronomy & Science Club of NIT Trichy</p>
                </div>
              </div>
              
              <p className="text-gray-200">
                Exploring the cosmos through science, innovation, and imagination. 
                Join us on our journey to explore and understand the fascinating wonders of our universe.
              </p>
              
              <div className="flex space-x-5">
                <a href="#" className="text-blue-300 hover:text-white transition-colors duration-300 transform hover:scale-110">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-blue-300 hover:text-white transition-colors duration-300 transform hover:scale-110">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-blue-300 hover:text-white transition-colors duration-300 transform hover:scale-110">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            {/* Quick Links - Now in two columns with better visibility */}
            <div className="md:col-span-4">
              <h4 className="text-lg font-semibold mb-6 text-white after:content-[''] after:block after:w-10 after:h-1 after:bg-space-blue after:mt-2">
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-3">
                    <li><Link to="/" className="text-blue-200 hover:text-white transition-colors">Home</Link></li>
                    <li><Link to="/about" className="text-blue-200 hover:text-white transition-colors">About</Link></li>
                    <li><Link to="/events" className="text-blue-200 hover:text-white transition-colors">Events</Link></li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li><Link to="/team" className="text-blue-200 hover:text-white transition-colors">Team</Link></li>
                    <li><Link to="/projects" className="text-blue-200 hover:text-white transition-colors">Projects</Link></li>
                    <li><Link to="/contact" className="text-blue-200 hover:text-white transition-colors">Contact</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Contact Information with improved visibility */}
            <div className="md:col-span-3">
              <h4 className="text-lg font-semibold mb-6 text-white after:content-[''] after:block after:w-10 after:h-1 after:bg-space-blue after:mt-2">
                Contact Us
              </h4>
              <address className="not-italic space-y-4">
                <div className="flex items-start">
                  <span className="mr-3 text-blue-400">📍</span>
                  <span className="text-blue-200">National Institute of Technology,<br />Tiruchirappalli, Tamil Nadu 620015</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3 text-blue-400">✉️</span>
                  <a href="mailto:nakshatra@nitt.edu" className="text-blue-200 hover:text-white transition-colors">nakshatra@nitt.edu</a>
                </div>
              </address>
            </div>
          </div>
        </div>
        
        {/* Copyright Bar with improved contrast and visibility */}
        <div className="bg-[#020610] py-4 backdrop-blur-sm border-t border-white/10">
          <div className="container mx-auto px-4 text-center md:flex md:justify-between md:items-center">
            <p className="text-blue-100 text-sm">
              © {new Date().getFullYear()} Nakshatra - The Astronomy & Science Club, NIT Trichy. All rights reserved.
            </p>
            <div className="mt-3 md:mt-0">
              <p className="text-xs text-blue-200">Designed with 💫 by Nakshatra Team</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
