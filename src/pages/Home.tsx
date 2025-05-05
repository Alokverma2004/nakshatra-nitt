
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import StarBackground from '../components/StarBackground';
import ImageCarousel from '../components/ImageCarousel';
import { ArrowRight, Calendar, Telescope, Users, FileText } from 'lucide-react';

// Update astronomical data widget (will be hidden on mobile)
const astronomicalData = {
  moonPhase: "Waxing Gibbous",
  moonIllumination: "78%",
  starVisibility: "High",
  time: new Date().toLocaleTimeString()
};

const cosmosImages = [
  "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
  "https://images.unsplash.com/photo-1465101162946-4377e57745c3",
  "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45"
];

const Home = () => {
  const featuredElementsRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Set loaded state after a short delay for animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('enhanced-fade-in');
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

  // Scroll to about section function
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <StarBackground />
      
      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-[100vh] flex items-center justify-center text-center px-4 parallax-container">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-space-darker/50 via-space-dark to-space-dark"></div>
        </div>
        
        <div className="container mx-auto relative z-10 py-16 md:py-0">
          {/* Logo with animation */}
          <div className="mb-6 animate-float">
            <img 
              src="/lovable-uploads/17c8b972-7058-4743-930b-750bcc504672.png" 
              alt="Nakshatra Logo" 
              className="h-24 sm:h-28 md:h-32 mx-auto hover-glow transition-all duration-500"
            />
          </div>

          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-poppins mb-6 leading-tight transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-300 animate-shimmer bg-[length:200%_auto]">Nakshatra</span>
          </h1>
          
          {/* Updated tagline */}
          <p className={`text-lg sm:text-xl md:text-2xl font-work-sans text-sky-200 mb-10 max-w-3xl mx-auto transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            The Astronomy and Science Club of NIT Trichy
          </p>
          
          <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-500 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link to="/about" className="btn-primary text-base sm:text-lg font-medium glow-on-hover group">
              <span className="relative z-10">Explore</span>
            </Link>
            <Link to="/events" className="btn-outline text-base sm:text-lg font-medium glow-on-hover group">
              <span className="relative z-10">Upcoming Events</span>
            </Link>
          </div>
          
          {/* Astronomical Data Widget - hidden on mobile as requested */}
          <div className={`absolute top-4 right-4 md:right-12 space-card p-3 md:p-4 text-left text-sm transition-all duration-1000 delay-700 ease-out hidden md:block ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <h4 className="text-space-blue-light font-medium mb-1">Night Sky Status</h4>
            <div className="text-gray-300 space-y-1">
              <p>Moon Phase: {astronomicalData.moonPhase}</p>
              <p>Illumination: {astronomicalData.moonIllumination}</p>
              <p>Star Visibility: {astronomicalData.starVisibility}</p>
              <p className="text-xs text-gray-400 mt-1">Last updated: {astronomicalData.time}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section Preview */}
      <section id="about" className="section bg-space-darker parallax-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 heading">About Nakshatra</h2>
            <div className="w-24 h-1 bg-space-blue mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <h3 className="text-2xl font-poppins font-bold mb-4 text-white">Who We Are</h3>
              
              {/* Updated description as requested */}
              <p className="text-gray-300 mb-6">
                Nakshatra, the official Astronomy and Science Club at the National Institute of Technology, Trichy, is a vibrant community for space enthusiasts and curious minds who share a fascination with the wonders of the cosmos.
              </p>
              <p className="text-gray-300 mb-6">
                As one of the most active technical clubs on campus, Nakshatra serves as a platform for students to engage deeply with astronomy and space through a variety of hands-on projects, interactive discussions, and exciting events. Our mission is to bring the universe closer to everyone on campus, fueling a passion for exploration and discovery that transcends academics and exams.
              </p>
              <Link to="/about" className="inline-flex items-center text-space-blue hover:text-space-blue-light transition-colors">
                Learn more about us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="space-card p-6 reveal">
              <ImageCarousel 
                images={cosmosImages}
                className="h-64 sm:h-72"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Feature Boxes */}
      <section className="section bg-space-dark" ref={featuredElementsRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Events Feature */}
            <div className="space-card p-6 hover:border-space-blue transition-colors group reveal">
              <div className="flex items-center mb-4">
                <div className="bg-space-blue/20 p-3 rounded-lg mr-4">
                  <Calendar className="h-6 w-6 text-space-blue" />
                </div>
                <h3 className="text-xl font-bold text-white">Regular Events</h3>
              </div>
              <p className="text-gray-300 mb-4">
                From stargazing sessions to workshops and competitions, we organize regular events to engage astronomy enthusiasts.
              </p>
              <Link 
                to="/events" 
                className="text-space-blue group-hover:text-space-blue-light transition-colors inline-flex items-center"
              >
                View upcoming events <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Projects Feature */}
            <div className="space-card p-6 hover:border-space-blue transition-colors group reveal">
              <div className="flex items-center mb-4">
                <div className="bg-space-blue/20 p-3 rounded-lg mr-4">
                  <Telescope className="h-6 w-6 text-space-blue" />
                </div>
                <h3 className="text-xl font-bold text-white">Technical Projects</h3>
              </div>
              <p className="text-gray-300 mb-4">
                We work on various astronomy and science projects including astrophotography, telescope making, and more.
              </p>
              <Link 
                to="/projects" 
                className="text-space-blue group-hover:text-space-blue-light transition-colors inline-flex items-center"
              >
                Explore projects <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Team Feature */}
            <div className="space-card p-6 hover:border-space-blue transition-colors group reveal">
              <div className="flex items-center mb-4">
                <div className="bg-space-blue/20 p-3 rounded-lg mr-4">
                  <Users className="h-6 w-6 text-space-blue" />
                </div>
                <h3 className="text-xl font-bold text-white">Our Team</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Meet our passionate team of astronomy enthusiasts who organize and run the club's activities.
              </p>
              <Link 
                to="/team" 
                className="text-space-blue group-hover:text-space-blue-light transition-colors inline-flex items-center"
              >
                Meet the team <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section - Added as requested with the new magazine image */}
      <section className="section bg-space-darker relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="w-full h-full bg-cosmic-gradient"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="w-full lg:w-1/3 flex justify-center">
              <img 
                src="/lovable-uploads/5535bc14-4d6f-4ab4-9d40-2bd02aea8733.png" 
                alt="VYOMIKA Magazine" 
                className="max-h-96 sm:max-h-[28rem] md:max-h-[36rem] object-contain rounded-lg shadow-xl hover-float"
              />
            </div>
            
            <div className="w-full lg:w-2/3 space-y-6 reveal">
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-center md:text-left">
                <span className="gradient-text">VYOMIKA: Astronomy Magazine</span>
              </h2>
              
              <div className="space-y-4 text-gray-300">
                <p>
                  Introducing the inaugural edition of VYOMIKA, the exclusive bi-yearly astronomy magazine of Nakshatra. This initiative represents a thoughtful effort to present the complexities of the cosmos in an engaging, simplified manner. Rather than relying on conventional formats, VYOMIKA aims to break down intricate astronomical concepts into easily digestible content, appealing to a wide audience.
                </p>
                
                <p>
                  The magazine features a curated selection of recent developments in space research, must-know astronomical facts, lesser-known phenomena, interesting space tidbits, interactive activities, and highlights from the club's own events. Every aspect of the magazine has been carefully crafted to convey a shared passion for astronomy and to showcase the wonders of space.
                </p>
                
                <p>
                  <strong className="text-white">NOTE:</strong> While every article has been meticulously fact-checked to ensure accuracy, VYOMIKA remains open to feedback and suggestions from its readers, fostering an environment of continuous improvement. The goal is to make each edition a space where the shared fascination with the universe can thrive, inspiring further exploration and curiosity about the cosmos.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
                <a 
                  href="#" 
                  className="btn-primary flex items-center gap-2 text-lg"
                >
                  <FileText className="h-5 w-5" /> Read Magazine
                </a>
                
                <a 
                  href="#" 
                  className="btn-outline flex items-center gap-2 text-lg"
                >
                  <span>Flipbook Link</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 sm:py-20 bg-space-dark relative">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cosmic-gradient opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6 text-white reveal">
            Join Us in Exploring the Cosmos
          </h2>
          <div className="flex flex-wrap justify-center gap-4 reveal mt-6">
            <Link to="/contact" className="btn-primary text-lg font-medium glow-on-hover">
              Contact Us
            </Link>
            <Link to="/events" className="btn-outline text-lg font-medium glow-on-hover">
              Join an Event
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
