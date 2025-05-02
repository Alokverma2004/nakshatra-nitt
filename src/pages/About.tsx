
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    // Animation for scroll reveal
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

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-space-darker">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-space-purple/30 via-transparent to-transparent opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6 text-white">
            About Nakshatra
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn about our mission, history, and passion for exploring the cosmos
          </p>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="section bg-space-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <h2 className="text-3xl font-poppins font-bold mb-6 text-space-purple">Our Mission</h2>
              <p className="text-gray-300 mb-4">
                Nakshatra aims to foster curiosity and appreciation for astronomy among students at NIT Trichy and the wider community. We are dedicated to promoting scientific literacy and encouraging exploration of the cosmos through hands-on experiences and educational initiatives.
              </p>
              <p className="text-gray-300">
                Our club provides a platform for astronomy enthusiasts to connect, learn, and grow together through various activities, observations, and projects.
              </p>
            </div>
            <div className="reveal">
              <div className="space-card p-6">
                <h2 className="text-3xl font-poppins font-bold mb-6 text-space-purple">Our Vision</h2>
                <p className="text-gray-300 mb-4">
                  We envision a community where astronomy is accessible to all, inspiring wonder and scientific inquiry about the universe around us. Nakshatra strives to:
                </p>
                <ul className="space-y-2 text-gray-300 list-disc list-inside ml-4">
                  <li>Make astronomy accessible and engaging for everyone</li>
                  <li>Provide opportunities for hands-on learning and observation</li>
                  <li>Foster collaboration between students, faculty, and astronomy enthusiasts</li>
                  <li>Contribute to astronomical research and citizen science projects</li>
                  <li>Inspire the next generation of astronomers and space scientists</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* History Section */}
      <section className="section bg-space-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 heading">Our History</h2>
            <div className="w-24 h-1 bg-space-purple mx-auto"></div>
          </div>
          
          <div className="relative mx-auto max-w-4xl">
            {/* Timeline connector */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-space-purple/50 transform md:translate-x-px"></div>
            
            {/* Timeline items */}
            <div className="space-y-16">
              {/* Timeline item 1 */}
              <div className="relative grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 reveal">
                <div className="md:col-span-2 md:text-right">
                  <div className="space-card p-4 md:mr-8">
                    <h3 className="text-xl font-bold text-white">2010</h3>
                    <p className="text-gray-400">Club Foundation</p>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 top-4 w-4 h-4 rounded-full bg-space-purple -translate-x-1/2"></div>
                <div className="md:col-span-2">
                  <div className="md:ml-8">
                    <h3 className="text-xl font-semibold text-white mb-2">The Beginning</h3>
                    <p className="text-gray-300">
                      Nakshatra was founded by a small group of astronomy enthusiasts who wanted to create a platform for students to engage with astronomy and space science beyond the classroom.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Timeline item 2 */}
              <div className="relative grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 reveal">
                <div className="md:col-span-2 md:text-right">
                  <div className="space-card p-4 md:mr-8">
                    <h3 className="text-xl font-bold text-white">2015</h3>
                    <p className="text-gray-400">First Telescope</p>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 top-4 w-4 h-4 rounded-full bg-space-purple -translate-x-1/2"></div>
                <div className="md:col-span-2">
                  <div className="md:ml-8">
                    <h3 className="text-xl font-semibold text-white mb-2">Expanding Horizons</h3>
                    <p className="text-gray-300">
                      The club acquired its first telescope, opening up new possibilities for observation and research. Regular stargazing sessions became a signature activity.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Timeline item 3 */}
              <div className="relative grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 reveal">
                <div className="md:col-span-2 md:text-right">
                  <div className="space-card p-4 md:mr-8">
                    <h3 className="text-xl font-bold text-white">2018</h3>
                    <p className="text-gray-400">Annual Festival</p>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 top-4 w-4 h-4 rounded-full bg-space-purple -translate-x-1/2"></div>
                <div className="md:col-span-2">
                  <div className="md:ml-8">
                    <h3 className="text-xl font-semibold text-white mb-2">AstroFest Launch</h3>
                    <p className="text-gray-300">
                      Launched our annual astronomy festival, bringing together students, faculty, and astronomy enthusiasts from across the region for workshops, competitions, and observation nights.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Timeline item 4 */}
              <div className="relative grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 reveal">
                <div className="md:col-span-2 md:text-right">
                  <div className="space-card p-4 md:mr-8">
                    <h3 className="text-xl font-bold text-white">Present</h3>
                    <p className="text-gray-400">Growing Community</p>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 top-4 w-4 h-4 rounded-full bg-space-purple -translate-x-1/2"></div>
                <div className="md:col-span-2">
                  <div className="md:ml-8">
                    <h3 className="text-xl font-semibold text-white mb-2">Today & Beyond</h3>
                    <p className="text-gray-300">
                      Today, Nakshatra continues to grow with regular events, workshops, and collaborative projects. We're expanding our outreach to schools and the community, sharing our passion for astronomy with a wider audience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* What We Do */}
      <section className="section bg-space-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 heading">What We Do</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From stargazing sessions to workshops and competitions, we organize a variety of activities to engage astronomy enthusiasts
            </p>
            <div className="w-24 h-1 bg-space-purple mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Activity 1 */}
            <div className="space-card p-6 reveal">
              <h3 className="text-xl font-bold text-white mb-4">Stargazing Sessions</h3>
              <p className="text-gray-300 mb-4">
                Regular observation nights where members can use telescopes to observe celestial bodies and learn about the night sky.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1500354245617-85afb164c49f" 
                alt="Stargazing" 
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
            </div>
            
            {/* Activity 2 */}
            <div className="space-card p-6 reveal">
              <h3 className="text-xl font-bold text-white mb-4">Workshops & Lectures</h3>
              <p className="text-gray-300 mb-4">
                Educational sessions on astronomy topics, telescope usage, astrophotography, and current developments in space science.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1" 
                alt="Workshop" 
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
            </div>
            
            {/* Activity 3 */}
            <div className="space-card p-6 reveal">
              <h3 className="text-xl font-bold text-white mb-4">Competitions & Events</h3>
              <p className="text-gray-300 mb-4">
                Annual astronomy quiz, astrophotography contests, and special events for celestial phenomena like eclipses and meteor showers.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700" 
                alt="Competition" 
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
            </div>
            
            {/* Activity 4 */}
            <div className="space-card p-6 reveal">
              <h3 className="text-xl font-bold text-white mb-4">Technical Projects</h3>
              <p className="text-gray-300 mb-4">
                Collaborative projects like telescope making, satellite tracking, astrophotography, and celestial mapping.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1518365050014-70fe7232897f" 
                alt="Technical Project" 
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
            </div>
            
            {/* Activity 5 */}
            <div className="space-card p-6 reveal">
              <h3 className="text-xl font-bold text-white mb-4">Outreach Programs</h3>
              <p className="text-gray-300 mb-4">
                Community engagement through school visits, public stargazing events, and astronomy awareness campaigns.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031" 
                alt="Outreach" 
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
            </div>
            
            {/* Activity 6 */}
            <div className="space-card p-6 reveal">
              <h3 className="text-xl font-bold text-white mb-4">Annual AstroFest</h3>
              <p className="text-gray-300 mb-4">
                Our flagship event featuring workshops, talks by experts, observation sessions, competitions, and more.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99" 
                alt="AstroFest" 
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-space-darker relative">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-space-purple/20 via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6 text-white reveal">
            Join the Nakshatra Community
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto reveal">
            Become a part of our astronomy family and explore the wonders of the cosmos together.
          </p>
          <div className="flex flex-wrap justify-center gap-4 reveal">
            <Link to="/events" className="btn-primary text-lg font-medium">
              Upcoming Events
            </Link>
            <Link to="/contact" className="btn-outline text-lg font-medium">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
