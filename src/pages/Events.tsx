
import { useState, useEffect } from 'react';

// Sample event data (in a real app, this would come from an API or database)
const upcomingEvents = [
  {
    id: 1,
    title: "Summer Stargazing Night",
    date: "2025-05-15",
    time: "8:00 PM - 11:00 PM",
    location: "University Observatory",
    description: "Join us for an evening of stargazing through our telescopes. We'll be observing planets, star clusters, and more!",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    registrationLink: "#"
  },
  {
    id: 2,
    title: "Astrophotography Workshop",
    date: "2025-05-22",
    time: "4:00 PM - 6:00 PM",
    location: "Physics Department, Room 301",
    description: "Learn the basics of astrophotography with our expert photographers. Bring your camera if you have one!",
    image: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031",
    registrationLink: "#"
  },
  {
    id: 3,
    title: "Eclipse Viewing Party",
    date: "2025-06-10",
    time: "2:00 PM - 4:30 PM",
    location: "University Main Lawn",
    description: "Witness the partial solar eclipse with proper viewing equipment provided by the Astronomy Club.",
    image: "https://images.unsplash.com/photo-1532798442725-41036acc7489",
    registrationLink: "#"
  }
];

const pastEvents = [
  {
    id: 101,
    title: "Astronomy Quiz Competition",
    date: "2025-04-05",
    location: "Central Auditorium",
    description: "A challenging quiz testing knowledge of astronomy, astrophysics, and space exploration.",
    image: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b",
    year: "2025",
    type: "Competition"
  },
  {
    id: 102,
    title: "Guest Lecture: Black Holes",
    date: "2025-03-22",
    location: "Physics Department",
    description: "An insightful lecture on the mysteries of black holes by Dr. Sarah Johnson, astrophysicist.",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
    year: "2025",
    type: "Lecture"
  },
  {
    id: 103,
    title: "Meteor Shower Observation",
    date: "2025-02-15",
    location: "University Observatory",
    description: "A night of observing the spectacular Perseid meteor shower with fellow astronomy enthusiasts.",
    image: "https://images.unsplash.com/photo-1596445836561-991bcd39a86d",
    year: "2025",
    type: "Stargazing"
  },
  {
    id: 104,
    title: "Telescope Making Workshop",
    date: "2024-11-10",
    location: "Engineering Building",
    description: "Hands-on workshop where participants learned to build their own small telescopes.",
    image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45",
    year: "2024",
    type: "Workshop"
  },
  {
    id: 105,
    title: "Annual AstroFest 2024",
    date: "2024-10-05",
    location: "Campus Central",
    description: "Our annual astronomy festival featuring competitions, exhibitions, talks, and observation sessions.",
    image: "https://images.unsplash.com/photo-1484950763426-56b5bf172dbb",
    year: "2024",
    type: "Festival"
  }
];

// Filter categories
const eventYears = ["All", "2025", "2024", "2023"];
const eventTypes = ["All", "Lecture", "Workshop", "Competition", "Stargazing", "Festival"];

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [yearFilter, setYearFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [filteredPastEvents, setFilteredPastEvents] = useState(pastEvents);
  
  // Format date function
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  // Apply filters
  useEffect(() => {
    let filtered = pastEvents;
    
    if (yearFilter !== 'All') {
      filtered = filtered.filter(event => event.year === yearFilter);
    }
    
    if (typeFilter !== 'All') {
      filtered = filtered.filter(event => event.type === typeFilter);
    }
    
    setFilteredPastEvents(filtered);
  }, [yearFilter, typeFilter]);
  
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
  }, [activeTab, filteredPastEvents]);

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
              className={`py-3 px-6 font-medium text-lg ${activeTab === 'upcoming' ? 'text-space-purple border-b-2 border-space-purple' : 'text-gray-300'}`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming Events
            </button>
            <button 
              className={`py-3 px-6 font-medium text-lg ${activeTab === 'past' ? 'text-space-purple border-b-2 border-space-purple' : 'text-gray-300'}`}
              onClick={() => setActiveTab('past')}
            >
              Past Events
            </button>
          </div>
          
          {/* Upcoming Events */}
          {activeTab === 'upcoming' && (
            <div className="space-y-8">
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
          )}
          
          {/* Past Events */}
          {activeTab === 'past' && (
            <div>
              {/* Filters */}
              <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">Filter by Year</label>
                  <select 
                    value={yearFilter}
                    onChange={(e) => setYearFilter(e.target.value)}
                    className="bg-space-darker border border-gray-700 text-white rounded-lg p-2.5 w-full"
                  >
                    {eventYears.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Filter by Type</label>
                  <select 
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="bg-space-darker border border-gray-700 text-white rounded-lg p-2.5 w-full"
                  >
                    {eventTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              {/* Past Events Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPastEvents.length > 0 ? (
                  filteredPastEvents.map(event => (
                    <div key={event.id} className="space-card overflow-hidden reveal">
                      <div className="relative h-48">
                        <img 
                          src={event.image} 
                          alt={event.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-space-purple text-white text-xs px-2 py-1 rounded">
                          {event.type}
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="text-gray-400 text-sm mb-1">{formatDate(event.date)}</div>
                        <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                        <div className="flex items-center text-gray-400 text-sm mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>{event.location}</span>
                        </div>
                        <p className="text-gray-300 text-sm line-clamp-3">{event.description}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-3 text-center py-16">
                    <p className="text-gray-300 text-lg">No events found with the selected filters.</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Events;
