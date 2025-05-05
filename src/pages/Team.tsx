
import { useEffect, useState } from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

// Sample team data - updated structure with only one faculty advisor
const facultyAdvisor = {
  id: 101,
  name: "Dr. Vikram Mehta",
  role: "Faculty Advisor",
  image: "https://i.pravatar.cc/300?img=60",
  department: "Department of Physics"
};

// Core team members
const coreTeamMembers = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "President",
    image: "https://i.pravatar.cc/300?img=11",
    social: {
      email: "aarav@example.com",
      linkedin: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Vice President",
    image: "https://i.pravatar.cc/300?img=5",
    social: {
      email: "priya@example.com",
      linkedin: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    id: 3,
    name: "Rohan Gupta",
    role: "Technical Head",
    image: "https://i.pravatar.cc/300?img=12",
    social: {
      email: "rohan@example.com",
      linkedin: "#",
      facebook: "#",
      instagram: "#"
    }
  },
];

// Other team members
const otherTeamMembers = [
  {
    id: 4,
    name: "Ananya Singh",
    role: "Events Coordinator",
    image: "https://i.pravatar.cc/300?img=10",
    social: {
      email: "ananya@example.com",
      linkedin: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    id: 5,
    name: "Vikram Desai",
    role: "Secretary",
    image: "https://i.pravatar.cc/300?img=15",
    social: {
      email: "vikram@example.com",
      linkedin: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    id: 6,
    name: "Zara Khan",
    role: "Outreach Coordinator",
    image: "https://i.pravatar.cc/300?img=9",
    social: {
      email: "zara@example.com",
      linkedin: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    id: 7,
    name: "Arjun Reddy",
    role: "Content Creator",
    image: "https://i.pravatar.cc/300?img=13",
    social: {
      email: "arjun@example.com",
      linkedin: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    id: 8,
    name: "Meera Verma",
    role: "Design Lead",
    image: "https://i.pravatar.cc/300?img=14",
    social: {
      email: "meera@example.com",
      linkedin: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    id: 9,
    name: "Rahul Joshi",
    role: "Technical Member",
    image: "https://i.pravatar.cc/300?img=16",
    social: {
      email: "rahul@example.com",
      linkedin: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    id: 10,
    name: "Sneha Kumar",
    role: "Social Media Manager",
    image: "https://i.pravatar.cc/300?img=17",
    social: {
      email: "sneha@example.com",
      linkedin: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    id: 11,
    name: "Karan Malhotra",
    role: "Event Manager",
    image: "https://i.pravatar.cc/300?img=18",
    social: {
      email: "karan@example.com",
      linkedin: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    id: 12,
    name: "Aisha Patel",
    role: "Workshop Coordinator",
    image: "https://i.pravatar.cc/300?img=19",
    social: {
      email: "aisha@example.com",
      linkedin: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    id: 13,
    name: "Nikhil Mehta",
    role: "Technical Member",
    image: "https://i.pravatar.cc/300?img=20",
    social: {
      email: "nikhil@example.com",
      linkedin: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    id: 14,
    name: "Riya Shah",
    role: "Content Writer",
    image: "https://i.pravatar.cc/300?img=21",
    social: {
      email: "riya@example.com",
      linkedin: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    id: 15,
    name: "Vivek Sharma",
    role: "Graphics Designer",
    image: "https://i.pravatar.cc/300?img=22",
    social: {
      email: "vivek@example.com",
      linkedin: "#",
      facebook: "#",
      instagram: "#"
    }
  }
];

// Past core team members
const pastCoreMembers = [
  {
    id: 201,
    name: "Arjun Nair",
    role: "Former President (2023-2024)",
    image: "https://i.pravatar.cc/300?img=32",
    social: {
      linkedin: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    id: 202,
    name: "Meera Kapoor",
    role: "Former Technical Head (2023-2024)",
    image: "https://i.pravatar.cc/300?img=23",
    social: {
      linkedin: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    id: 203,
    name: "Rahul Verma",
    role: "Former Outreach Coordinator (2023-2024)",
    image: "https://i.pravatar.cc/300?img=33",
    social: {
      linkedin: "#",
      facebook: "#",
      instagram: "#"
    }
  }
];

const Team = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

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
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-space-blue/30 via-transparent to-transparent opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6 text-white transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Our Team
          </h1>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Meet the passionate individuals behind Nakshatra who make our celestial journey possible
          </p>
        </div>
      </section>
      
      {/* Faculty Advisor - Now at the top */}
      <section className="section bg-space-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 heading">Faculty Advisor</h2>
            <div className="w-24 h-1 bg-space-blue mx-auto mt-4"></div>
          </div>
          
          <div className="max-w-xl mx-auto">
            <Card className="space-card hover:border-space-blue transition-all duration-300 reveal team-card overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col items-center p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-space-blue/20 to-transparent opacity-40"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-space-blue ring-4 ring-space-blue/30">
                      <img 
                        src={facultyAdvisor.image} 
                        alt={facultyAdvisor.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-2">{facultyAdvisor.name}</h3>
                      <p className="text-space-blue-light text-lg mb-1">{facultyAdvisor.role}</p>
                      <p className="text-gray-300">{facultyAdvisor.department}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Core Team Members - with extra spacing */}
      <section className="section bg-space-dark pt-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 heading">Core Team</h2>
            <div className="w-24 h-1 bg-space-blue mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreTeamMembers.map((member) => (
              <Card key={member.id} className="space-card reveal team-card overflow-hidden">
                <CardContent className="p-0">
                  {/* Team member image with overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-space-darker via-transparent to-transparent z-10"></div>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-space-blue-light">{member.role}</p>
                    </div>
                  </div>
                  
                  {/* Social media links */}
                  <div className="flex justify-center gap-6 p-4 border-t border-white/10">
                    <a 
                      href={member.social.linkedin} 
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href={member.social.facebook} 
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={`${member.name}'s Facebook`}
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a 
                      href={member.social.instagram} 
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={`${member.name}'s Instagram`}
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Other Team Members */}
      <section className="section bg-space-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 heading">Other Team Members</h2>
            <div className="w-24 h-1 bg-space-blue mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {otherTeamMembers.map((member) => (
              <Card key={member.id} className="space-card reveal team-card overflow-hidden">
                <CardContent className="p-0">
                  {/* Team member image with overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-space-darker via-transparent to-transparent z-10"></div>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                      <h3 className="text-lg font-bold text-white">{member.name}</h3>
                      <p className="text-space-blue-light text-sm">{member.role}</p>
                    </div>
                  </div>
                  
                  {/* Social media links */}
                  <div className="flex justify-center gap-4 p-3 border-t border-white/10">
                    <a 
                      href={member.social.linkedin} 
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a 
                      href={member.social.facebook} 
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={`${member.name}'s Facebook`}
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                    <a 
                      href={member.social.instagram} 
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={`${member.name}'s Instagram`}
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Core Members */}
      <section className="section bg-space-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 heading">Past Core Team</h2>
            <div className="w-24 h-1 bg-space-blue mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastCoreMembers.map((member) => (
              <Card key={member.id} className="space-card reveal team-card overflow-hidden">
                <CardContent className="p-0">
                  {/* Team member image with overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-space-darker via-transparent to-transparent z-10"></div>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-space-blue-light">{member.role}</p>
                    </div>
                  </div>
                  
                  {/* Social media links */}
                  <div className="flex justify-center gap-6 p-4 border-t border-white/10">
                    <a 
                      href={member.social.linkedin} 
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href={member.social.facebook} 
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={`${member.name}'s Facebook`}
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a 
                      href={member.social.instagram} 
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={`${member.name}'s Instagram`}
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
