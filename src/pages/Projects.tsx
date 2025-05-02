
import { useState, useEffect } from 'react';

// Sample projects data
const projects = [
  {
    id: 1,
    title: "DIY Telescope Workshop",
    category: "Hands-on",
    description: "A recurring workshop where participants build their own small refracting telescope using provided materials and guidance. Participants learn about optics principles and telescope design.",
    image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45",
    status: "Ongoing",
    year: "2025"
  },
  {
    id: 2,
    title: "Sky Mapping Initiative",
    category: "Research",
    description: "A collaborative project to create detailed maps of the night sky visible from our location throughout the year, noting celestial objects and phenomena visible during different seasons.",
    image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7",
    status: "Ongoing",
    year: "2025"
  },
  {
    id: 3,
    title: "Radio Astronomy Station",
    category: "Technical",
    description: "Development of a small radio telescope for detecting and analyzing radio waves from celestial objects like the Sun, Jupiter, and distant galaxies. Includes signal processing and data analysis.",
    image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3",
    status: "Ongoing",
    year: "2025"
  },
  {
    id: 4,
    title: "Astrophotography Archive",
    category: "Documentation",
    description: "A systematic effort to document celestial events and objects through photography, creating a comprehensive archive of astronomical observations made by club members.",
    image: "https://images.unsplash.com/photo-1518365050014-70fe7232897f",
    status: "Ongoing",
    year: "2025"
  },
  {
    id: 5,
    title: "Meteorite Analysis",
    category: "Research",
    description: "Study and classification of meteorite samples, with analysis of their composition and origins. Collaboration with the Geology department for advanced testing.",
    image: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8",
    status: "Completed",
    year: "2024"
  },
  {
    id: 6,
    title: "Mobile Observatory",
    category: "Technical",
    description: "Design and construction of a portable observatory system that can be transported to different locations for observation events and outreach programs.",
    image: "https://images.unsplash.com/photo-1572639083880-46e2c15560ad",
    status: "Completed",
    year: "2024"
  },
  {
    id: 7,
    title: "Star Party Handbook",
    category: "Educational",
    description: "Creation of a comprehensive guide for organizing and conducting successful star parties, including observational targets, equipment management, and public engagement techniques.",
    image: "https://images.unsplash.com/photo-1530508777238-14544088c3ed",
    status: "Completed",
    year: "2023"
  },
  {
    id: 8,
    title: "Solar System Scale Model",
    category: "Educational",
    description: "Construction of a to-scale model of the Solar System installed across the university campus, with informational plaques at each planet's location.",
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5",
    status: "Completed",
    year: "2023"
  }
];

const categories = ["All", "Technical", "Research", "Educational", "Hands-on", "Documentation"];
const statuses = ["All", "Ongoing", "Completed"];
const years = ["All", "2025", "2024", "2023"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  // Apply filters
  useEffect(() => {
    let filtered = projects;
    
    if (selectedCategory !== "All") {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }
    
    if (selectedStatus !== "All") {
      filtered = filtered.filter(project => project.status === selectedStatus);
    }
    
    if (selectedYear !== "All") {
      filtered = filtered.filter(project => project.year === selectedYear);
    }
    
    setFilteredProjects(filtered);
  }, [selectedCategory, selectedStatus, selectedYear]);
  
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
  }, [filteredProjects]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-space-darker">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-space-purple/30 via-transparent to-transparent opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6 text-white">
            Our Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the technical and scientific initiatives undertaken by Nakshatra
          </p>
        </div>
      </section>
      
      {/* Filters */}
      <section className="py-10 bg-space-dark border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-gray-300 mb-2">Category</label>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-space-darker border border-gray-700 text-white rounded-lg p-2.5 w-full"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            {/* Status Filter */}
            <div>
              <label className="block text-gray-300 mb-2">Status</label>
              <select 
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="bg-space-darker border border-gray-700 text-white rounded-lg p-2.5 w-full"
              >
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
            
            {/* Year Filter */}
            <div>
              <label className="block text-gray-300 mb-2">Year</label>
              <select 
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="bg-space-darker border border-gray-700 text-white rounded-lg p-2.5 w-full"
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="section bg-space-dark">
        <div className="container mx-auto px-4">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="space-card overflow-hidden group reveal">
                  <div className="relative h-56">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-space-darker to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-space-purple text-white text-xs px-2 py-1 rounded">
                      {project.category}
                    </div>
                    <div className={`absolute top-4 right-4 text-white text-xs px-2 py-1 rounded ${
                      project.status === "Ongoing" ? "bg-green-600" : "bg-blue-600"
                    }`}>
                      {project.status}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="text-gray-400 text-sm">
                      Year: {project.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-300 text-lg">No projects found with the selected filters.</p>
              <button 
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedStatus("All");
                  setSelectedYear("All");
                }}
                className="mt-4 btn-outline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Project Participation */}
      <section className="py-20 bg-space-darker relative">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-space-purple/20 via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="reveal">
              <h2 className="text-3xl font-poppins font-bold mb-6 text-space-purple">Get Involved in Our Projects</h2>
              <p className="text-gray-300 mb-6">
                Nakshatra welcomes students and astronomy enthusiasts to participate in our ongoing projects or propose new initiatives. Whether you're interested in technical development, research, or educational outreach, there's a place for you in our team.
              </p>
              <p className="text-gray-300 mb-6">
                No prior experience is required for many of our projects – just a curiosity about the cosmos and a willingness to learn!
              </p>
              <a href="/contact" className="btn-primary inline-block">Contact Us to Participate</a>
            </div>
            <div className="space-card p-6 reveal">
              <h3 className="text-xl font-bold text-white mb-4">Project Proposal Process</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-space-purple/20 p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-space-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p>Submit your project idea through our contact form or during club meetings.</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-space-purple/20 p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-space-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p>Our team will review your proposal and discuss feasibility and resources.</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-space-purple/20 p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-space-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p>If approved, we'll help assemble a team and provide necessary guidance and resources.</p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-space-purple/20 p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-space-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p>Projects typically run for one semester or one academic year, with possibilities for extension.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
