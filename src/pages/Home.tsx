
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import StarBackground from '../components/StarBackground';
import { ArrowRight, Calendar, Telescope, Users } from 'lucide-react';

const cosmosImages = [
  "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
  "https://images.unsplash.com/photo-1465101162946-4377e57745c3",
  "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45"
];

const Home = () => {
  const featuredElementsRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  // Effect for image rotation in "Who We Are" section
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === cosmosImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    
    return () => clearInterval(imageInterval);
  }, []);

  return (
    <>
      <StarBackground />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-space-darker/50 via-space-dark to-space-dark"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          {/* Logo with flip animation */}
          <div className="mb-6 flip-container">
            <div className="flipper">
              <div className="front">
                <img 
                  src="/lovable-uploads/b65fb392-581d-4ab2-933e-9a4c5d38e2b0.png" 
                  alt="Nakshatra Logo" 
                  className="h-32 mx-auto"
                />
              </div>
              <div className="back">
                <img 
                  src="/lovable-uploads/b65fb392-581d-4ab2-933e-9a4c5d38e2b0.png" 
                  alt="Nakshatra Logo" 
                  className="h-32 mx-auto"
                />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins mb-6 leading-tight">
            <span className="text-white">Nakshatra</span>
            <span className="block text-space-purple-light">The Astronomy Club of NIT Trichy</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Exploring the Universe, One Star at a Time
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/about" className="btn-primary text-lg font-medium">
              Explore
            </Link>
            <Link to="/events" className="btn-outline text-lg font-medium">
              Upcoming Events
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white/70 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>
      
      {/* About Section Preview */}
      <section id="about" className="section bg-space-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 heading">About Nakshatra</h2>
            <div className="w-24 h-1 bg-space-purple mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <h3 className="text-2xl font-poppins font-bold mb-4 text-white">Who We Are</h3>
              <p className="text-gray-300 mb-6">
                Nakshatra, the Astronomy and Science Club of NIT Trichy, is a community of astronomy enthusiasts dedicated to exploring the wonders of the universe. Founded with a passion for celestial observations and scientific inquiry, we provide a platform for students to engage with astronomy through various events, stargazing sessions, and projects.
              </p>
              <p className="text-gray-300 mb-6">
                Our mission is to foster curiosity about the cosmos and promote scientific literacy among students and the wider community.
              </p>
              <Link to="/about" className="inline-flex items-center text-space-purple hover:text-space-purple-light transition-colors">
                Learn more about us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="space-card p-6 reveal">
              <div className="relative rounded-lg overflow-hidden h-72">
                {cosmosImages.map((src, index) => (
                  <img 
                    key={index}
                    src={src} 
                    alt={`Cosmos image ${index + 1}`} 
                    className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-space-darker to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-xl font-medium">Explore the Cosmos</h4>
                  <p className="text-sm text-gray-300">Join our stargazing sessions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Feature Boxes */}
      <section className="section bg-space-dark" ref={featuredElementsRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Events Feature */}
            <div className="space-card p-6 hover:border-space-purple transition-colors group reveal">
              <div className="flex items-center mb-4">
                <div className="bg-space-purple/20 p-3 rounded-lg mr-4">
                  <Calendar className="h-6 w-6 text-space-purple" />
                </div>
                <h3 className="text-xl font-bold text-white">Regular Events</h3>
              </div>
              <p className="text-gray-300 mb-4">
                From stargazing sessions to workshops and competitions, we organize regular events to engage astronomy enthusiasts.
              </p>
              <Link 
                to="/events" 
                className="text-space-purple group-hover:text-space-purple-light transition-colors inline-flex items-center"
              >
                View upcoming events <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Projects Feature */}
            <div className="space-card p-6 hover:border-space-purple transition-colors group reveal">
              <div className="flex items-center mb-4">
                <div className="bg-space-purple/20 p-3 rounded-lg mr-4">
                  <Telescope className="h-6 w-6 text-space-purple" />
                </div>
                <h3 className="text-xl font-bold text-white">Technical Projects</h3>
              </div>
              <p className="text-gray-300 mb-4">
                We work on various astronomy and science projects including astrophotography, telescope making, and more.
              </p>
              <Link 
                to="/projects" 
                className="text-space-purple group-hover:text-space-purple-light transition-colors inline-flex items-center"
              >
                Explore projects <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Team Feature */}
            <div className="space-card p-6 hover:border-space-purple transition-colors group reveal md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="bg-space-purple/20 p-3 rounded-lg mr-4">
                  <Users className="h-6 w-6 text-space-purple" />
                </div>
                <h3 className="text-xl font-bold text-white">Our Team</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Meet our passionate team of astronomy enthusiasts who organize and run the club's activities.
              </p>
              <Link 
                to="/team" 
                className="text-space-purple group-hover:text-space-purple-light transition-colors inline-flex items-center"
              >
                Meet the team <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action - with removed text as requested */}
      <section className="py-20 bg-space-dark relative">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-nebula-gradient opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6 text-white reveal">
            Join Us in Exploring the Cosmos
          </h2>
          <div className="flex flex-wrap justify-center gap-4 reveal mt-6">
            <Link to="/contact" className="btn-primary text-lg font-medium">
              Contact Us
            </Link>
            <Link to="/events" className="btn-outline text-lg font-medium">
              Join an Event
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
