
import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

// Sample event data (in a real app, this would come from an API or database)
const upcomingEvents = [
  {
    id: 1,
    title: "Stargazing Session",
    date: "2025-05-15",
    time: "8:00 PM - 11:00 PM",
    location: "Ojas",
    description: "Join us for an evening of stargazing through our telescopes. We'll be observing planets, star clusters, and more!",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    registrationLink: "#"
  }
];

const pastEvents = [
  {
    id: 101,
    title: "Astronomy Quiz Competition",
    date: "2025-04-05",
    location: "A2 Hall",
    description: "A challenging quiz testing knowledge of astronomy, astrophysics, and space exploration.",
    image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45"
  },
  {
    id: 102,
    title: "Guest Lecture: Black Holes",
    date: "2025-03-22",
    location: "Barn Hall",
    description: "An insightful lecture on the mysteries of black holes by Dr. Sarah Johnson, astrophysicist.",
    image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3"
  },
  {
    id: 103,
    title: "Meteor Shower Observation",
    date: "2025-02-15",
    location: "Ojas",
    description: "A night of observing the spectacular Perseid meteor shower with fellow astronomy enthusiasts.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
  },
  {
    id: 104,
    title: "Telescope Making Workshop",
    date: "2024-11-10",
    location: "A2 Hall",
    description: "Hands-on workshop where participants learned to build their own small telescopes.",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
  },
  {
    id: 105,
    title: "Annual AstroFest 2024",
    date: "2024-10-05",
    location: "Barn Hall",
    description: "Our annual astronomy festival featuring competitions, exhibitions, talks, and observation sessions.",
    image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45"
  }
];

const Events = () => {
  const [activeTab, setActiveTab] = useState('past'); // Default to 'past'
  
  // Format date function
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  // Animation for scroll reveal
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
  }, [activeTab]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-space-darker">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-space-purple/30 via-transparent to-transparent opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6 text-white">
            Events
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover upcoming astronomy events and explore our past activities
          </p>
        </div>
      </section>
      
      {/* Event Tabs */}
      <section className="section bg-space-dark">
        <div className="container mx-auto px-4">
          <div className="flex border-b border-gray-700 mb-8">
            <button 
              className={`py-3 px-6 font-medium text-lg ${activeTab === 'past' ? 'text-space-purple border-b-2 border-space-purple' : 'text-gray-300'}`}
              onClick={() => setActiveTab('past')}
            >
              Past Events
            </button>
            <button 
              className={`py-3 px-6 font-medium text-lg ${activeTab === 'upcoming' ? 'text-space-purple border-b-2 border-space-purple' : 'text-gray-300'}`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming Events
            </button>
          </div>
          
          {/* Past Events - Simple list with images */}
          {activeTab === 'past' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map(event => (
                <div key={event.id} className="space-card overflow-hidden reveal">
                  <div className="relative h-48">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-space-darker/90 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-bold text-white">{event.title}</h3>
                      <p className="text-sm text-gray-300">{formatDate(event.date)} • {event.location}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-300">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Upcoming Events - Side layout with one event */}
          {activeTab === 'upcoming' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <div className="md:col-span-1 md:pr-6 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-white mb-4">Upcoming Events</h3>
                <p className="text-gray-300 mb-6">
                  Join us for our exciting upcoming astronomy events. Register early to secure your spot!
                </p>
                
                <div className="space-card p-4 bg-space-purple/10 reveal">
                  <div className="flex items-center mb-3">
                    <Calendar className="h-5 w-5 text-space-purple mr-2" />
                    <h4 className="text-lg font-medium text-white">Mark Your Calendar</h4>
                  </div>
                  <p className="text-sm text-gray-300">
                    Our next stargazing session will be held on May 15th at Ojas. Don't miss this opportunity to explore the night sky with our telescopes.
                  </p>
                </div>
              </div>
              
              <div className="md:col-span-2">
                {upcomingEvents.map(event => (
                  <div key={event.id} className="space-card p-0 overflow-hidden reveal">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                      <div className="h-60 md:h-full relative">
                        <img 
                          src={event.image} 
                          alt={event.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-space-darker/70 to-transparent md:bg-gradient-to-r"></div>
                        <div className="absolute bottom-4 left-4 md:hidden">
                          <p className="text-white/90 text-sm">{formatDate(event.date)}</p>
                          <h3 className="text-xl font-bold text-white">{event.title}</h3>
                        </div>
                      </div>
                      <div className="col-span-2 p-6">
                        <div className="hidden md:block mb-2">
                          <span className="text-space-purple">{formatDate(event.date)} • {event.time}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 hidden md:block">{event.title}</h3>
                        <div className="flex items-center text-gray-300 mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>{event.location}</span>
                        </div>
                        <div className="md:hidden text-space-purple text-sm mb-4">
                          {event.time}
                        </div>
                        <p className="text-gray-300 mb-6">{event.description}</p>
                        <a href={event.registrationLink} className="btn-primary inline-block">
                          Register Now
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Events;
