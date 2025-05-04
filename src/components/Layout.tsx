
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
                src="/lovable-uploads/7a406d95-69ac-4b48-96b1-3ff4fc2a17e7.png" 
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
              className={({ isActive }) => `py-2 px-4 ${isActive ? 'text-space-blue' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `py-2 px-4 ${isActive ? 'text-space-blue' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              to="/events" 
              className={({ isActive }) => `py-2 px-4 ${isActive ? 'text-space-blue' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Events
            </NavLink>
            <NavLink 
              to="/team" 
              className={({ isActive }) => `py-2 px-4 ${isActive ? 'text-space-blue' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Team
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => `py-2 px-4 ${isActive ? 'text-space-blue' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink 
              to="/gallery" 
              className={({ isActive }) => `py-2 px-4 ${isActive ? 'text-space-blue' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `py-2 px-4 ${isActive ? 'text-space-blue' : 'text-white'}`}
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

      {/* Modern Footer with enhanced design */}
      <footer className="modern-footer">
        {/* Upper Footer with Sections */}
        <div className="container mx-auto pt-16 pb-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-4 reveal">
              <div className="flex items-start space-x-3 mb-6">
                <img src="/lovable-uploads/7a406d95-69ac-4b48-96b1-3ff4fc2a17e7.png" alt="Nakshatra Logo" className="h-12 w-auto" />
                <div>
                  <h3 className="text-2xl font-poppins font-bold text-white">Nakshatra</h3>
                  <p className="text-blue-300 text-sm">Astronomy Club of NIT Trichy</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Exploring the universe one star at a time. Join us in our journey through the cosmos as we discover the wonders of astronomy.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="footer-social-icon bg-blue-900/30 rounded-full p-2.5" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="footer-social-icon bg-blue-900/30 rounded-full p-2.5" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="footer-social-icon bg-blue-900/30 rounded-full p-2.5" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="md:col-span-3 reveal">
              <h4 className="text-lg font-semibold mb-6 text-white relative inline-block after:content-[''] after:absolute after:w-12 after:h-1 after:bg-space-blue after:-bottom-2 after:left-0">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="footer-link">About</Link></li>
                <li><Link to="/events" className="footer-link">Events</Link></li>
                <li><Link to="/team" className="footer-link">Team</Link></li>
                <li><Link to="/projects" className="footer-link">Projects</Link></li>
                <li><Link to="/gallery" className="footer-link">Gallery</Link></li>
                <li><Link to="/contact" className="footer-link">Contact</Link></li>
              </ul>
            </div>
            
            {/* Contact Information */}
            <div className="md:col-span-5 reveal">
              <h4 className="text-lg font-semibold mb-6 text-white relative inline-block after:content-[''] after:absolute after:w-12 after:h-1 after:bg-space-blue after:-bottom-2 after:left-0">
                Contact Us
              </h4>
              <address className="not-italic">
                <div className="space-y-4">
                  <p className="text-gray-300 flex items-start">
                    <span className="mr-3 mt-1 text-blue-300">📍</span>
                    <span>National Institute of Technology<br />Tiruchirappalli, Tamil Nadu 620015</span>
                  </p>
                  <p className="text-gray-300 flex items-center">
                    <span className="mr-3 text-blue-300">✉️</span>
                    <span>nakshatra@nitt.edu</span>
                  </p>
                  <p className="text-gray-300 flex items-center">
                    <span className="mr-3 text-blue-300">📞</span>
                    <span>+91 9876543210</span>
                  </p>
                </div>
              </address>
            </div>
          </div>
        </div>
        
        {/* Copyright Bar */}
        <div className="bg-space-darker py-4 border-t border-blue-900/20">
          <div className="container mx-auto px-4 text-center md:text-left md:flex md:justify-between md:items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Nakshatra - The Astronomy Club, NIT Trichy. All rights reserved.
            </p>
            <div className="mt-3 md:mt-0">
              <ul className="flex justify-center md:justify-start space-x-6 text-sm">
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Terms of Use</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
