
import { useEffect } from 'react';

// Sample team data
const coreTeamMembers = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "President",
    image: "https://i.pravatar.cc/300?img=11",
    bio: "Astrophysics major with a passion for observational astronomy and public outreach.",
    social: {
      email: "aarav@example.com",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Vice President",
    image: "https://i.pravatar.cc/300?img=5",
    bio: "Physics student specializing in cosmology. Loves organizing stargazing events and workshops.",
    social: {
      email: "priya@example.com",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 3,
    name: "Rohan Gupta",
    role: "Technical Head",
    image: "https://i.pravatar.cc/300?img=12",
    bio: "Engineering student with expertise in telescope operations and astrophotography.",
    social: {
      email: "rohan@example.com",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 4,
    name: "Ananya Singh",
    role: "Events Coordinator",
    image: "https://i.pravatar.cc/300?img=10",
    bio: "Communications major who manages all club events and collaborations with other organizations.",
    social: {
      email: "ananya@example.com",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 5,
    name: "Vikram Desai",
    role: "Secretary",
    image: "https://i.pravatar.cc/300?img=15",
    bio: "Mathematics student who handles club administration and maintains the observatory equipment.",
    social: {
      email: "vikram@example.com",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 6,
    name: "Zara Khan",
    role: "Outreach Coordinator",
    image: "https://i.pravatar.cc/300?img=9",
    bio: "Education major passionate about bringing astronomy to schools and community groups.",
    social: {
      email: "zara@example.com",
      linkedin: "#",
      twitter: "#"
    }
  }
];

const advisors = [
  {
    id: 101,
    name: "Dr. Vikram Mehta",
    role: "Faculty Advisor",
    image: "https://i.pravatar.cc/300?img=60",
    bio: "Professor of Astrophysics with research focus on stellar evolution and galactic dynamics.",
    department: "Department of Physics"
  },
  {
    id: 102,
    name: "Dr. Lakshmi Rao",
    role: "Technical Advisor",
    image: "https://i.pravatar.cc/300?img=29",
    bio: "Associate Professor specializing in observational astronomy and instrumentation.",
    department: "Department of Physics"
  },
  {
    id: 103,
    name: "Dr. Rajesh Kumar",
    role: "Research Mentor",
    image: "https://i.pravatar.cc/300?img=50",
    bio: "Assistant Professor with expertise in computational astrophysics and cosmology.",
    department: "Department of Computer Science"
  }
];

const Team = () => {
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
            Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the passionate individuals behind Nakshatra who make our celestial journey possible
          </p>
        </div>
      </section>
      
      {/* Core Team Members */}
      <section className="section bg-space-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 heading">Core Team</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The enthusiastic individuals who coordinate and manage all club activities
            </p>
            <div className="w-24 h-1 bg-space-purple mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTeamMembers.map((member) => (
              <div key={member.id} className="space-card p-6 hover:border-space-purple transition-colors reveal">
                <div className="flex items-center mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mr-4 border-2 border-space-purple">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-space-purple">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{member.bio}</p>
                <div className="flex space-x-4">
                  <a 
                    href={`mailto:${member.social.email}`} 
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                  <a 
                    href={member.social.linkedin} 
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                  <a 
                    href={member.social.twitter} 
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Faculty Advisors */}
      <section className="section bg-space-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 heading">Faculty Advisors</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Academic mentors who provide guidance and support to our club activities
            </p>
            <div className="w-24 h-1 bg-space-purple mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor) => (
              <div key={advisor.id} className="space-card p-6 reveal">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-2 border-space-purple">
                    <img 
                      src={advisor.image} 
                      alt={advisor.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-1">{advisor.name}</h3>
                    <p className="text-space-purple mb-1">{advisor.role}</p>
                    <p className="text-gray-400 text-sm">{advisor.department}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-center">{advisor.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join the Team */}
      <section className="py-20 bg-space-dark relative">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-nebula-gradient opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6 text-white reveal">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto reveal">
            Interested in astronomy and want to be part of our team? We're always looking for passionate individuals!
          </p>
          <div className="space-card p-8 max-w-2xl mx-auto reveal">
            <h3 className="text-2xl font-bold text-white mb-4">How to Get Involved</h3>
            <ul className="text-gray-300 text-left space-y-3 mb-6">
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-space-purple/20 p-1 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-space-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>Attend our regular meetings and events to get to know the team and our activities.</p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-space-purple/20 p-1 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-space-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>Volunteer to help organize events or assist with technical projects.</p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-space-purple/20 p-1 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-space-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p>Watch for open positions during our annual recruitment drive at the beginning of each academic year.</p>
              </li>
            </ul>
            <a href="/contact" className="btn-primary">Contact Us</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
