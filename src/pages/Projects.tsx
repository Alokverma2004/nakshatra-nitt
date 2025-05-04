
import { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';

// Project data by category
const telescopeProjects = [
  {
    id: 1,
    title: "Hologram",
    description: "A novel method to project three-dimensional objects into a smoke screen using lasers is being explored. Simple methods were also tested....",
    image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45",
    expanded: false,
    reportUrl: "#telescope-hologram-report" // Link to Google Drive report
  },
  {
    id: 2,
    title: "Refractor Telescope",
    description: "Built an 18x telescope with a 450mm focal length objective lens and 25mm eyepiece. Used to observe the moons of Jupiter. Used to look at the active regions of the Sun with a solar filter.",
    image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7",
    expanded: false,
    reportUrl: "#telescope-refractor-report" // Link to Google Drive report
  },
  {
    id: 3,
    title: "Spectrometer",
    description: "Building a spectrometer from scratch using a 15000lpi diffraction grating and Raspberry Pi5. Will run on an open-source Python tool to analyze spectral data acquired using our telescopes.",
    image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3",
    expanded: false,
    reportUrl: "#telescope-spectrometer-report" // Link to Google Drive report
  }
];

const hardwareProjects = [
  {
    id: 4,
    title: "Rover",
    description: "Design and experiments for a rover with sensor modules for variables like pressure, temperature composition underway. It will also have modules for object detection, terrain modeling, etc.",
    image: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8",
    expanded: false,
    reportUrl: "#hardware-rover-report" // Link to Google Drive report
  },
  {
    id: 5,
    title: "FPGA-based PID Controller for Temperature Regulation",
    description: "A Basys 3 FPGA board regulates the temperature of a rocket payload. It adjusts the heating or cooling based on Proportional, Integral, and Derivative calculations ensuring stable conditions for sensitive equipment. Potential applications in rocket and satellite technologies.",
    image: "https://images.unsplash.com/photo-1572639083880-46e2c15560ad",
    expanded: false,
    reportUrl: "#hardware-fpga-report" // Link to Google Drive report
  }
];

const softwareProjects = [
  {
    id: 6,
    title: "Photometric Redshift Estimation",
    description: "Photometric redshift estimation leverages multiband photometry to efficiently approximate galaxy and quasar redshifts, bypassing the time-intensive spectroscopic methods, particularly for faint objects. This approach supports large-scale studies of the universe's structure and cosmic evolution by analyzing galaxy distributions and properties across redshifts. Utilizing a Random Forest (RF) algorithm enhanced with a Gaussian Mixture Model (GMM), the method provides probabilistic redshift predictions, incorporating measurement uncertainties for more robust results. The integration of RF and GMM ensures better uncertainty representation, essential for handling the complexities of galaxy survey datasets.",
    image: "https://images.unsplash.com/photo-1530508777238-14544088c3ed",
    expanded: false,
    reportUrl: "#software-redshift-report" // Link to Google Drive report
  },
  {
    id: 7,
    title: "Astronomical Object Detection",
    description: "Large amounts of data are collected through telescopes all over the world. They produce images that contain various celestial bodies such as stars, galaxies, nebulae, etc. A Convolutional Neural Network (CNN) is used to recognize patterns in these images. This enables us to identify distant objects based on their shape and brightness (light curve values), leading to more effective space exploration. An autoencoder helps in compressing large astronomical images, making the storage and transmission more efficient. Random forest methods will also be tested to handle multidimensional features.",
    image: "https://images.unsplash.com/photo-1518365050014-70fe7232897f",
    expanded: false,
    reportUrl: "#software-detection-report" // Link to Google Drive report
  },
  {
    id: 8,
    title: "High-Resolution Imaging",
    description: "High-resolution imaging is crucial in astronomy to observe fine details and gain insights into phenomena like galaxy formation, star evolution, and planetary features. This model reconstructs high-resolution images from low-resolution inputs using Super-Resolution Generative Adversarial Network (SRGAN) architecture. Training with Binary Cross-Entropy and Mean Squared Error losses, this model is optimized specifically for astronomical image reconstruction, addressing unique challenges like noise and limited high-resolution data.",
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5",
    expanded: false,
    reportUrl: "#software-imaging-report" // Link to Google Drive report
  }
];

// Create arrays of carousel images for each project
const projectImages = {
  // Telescope projects
  1: [
    "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45",
    "https://images.unsplash.com/photo-1543083115-638c520a8eed",
    "https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45"
  ],
  2: [
    "https://images.unsplash.com/photo-1543722530-d2c3201371e7",
    "https://images.unsplash.com/photo-1532369356897-08c97422c477",
    "https://images.unsplash.com/photo-1527066579998-dbbae57f45ce"
  ],
  3: [
    "https://images.unsplash.com/photo-1465101162946-4377e57745c3",
    "https://images.unsplash.com/photo-1607988795691-3d0147b43231",
    "https://images.unsplash.com/photo-1623161551723-eff0c6c4da25"
  ],
  
  // Hardware projects
  4: [
    "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8",
    "https://images.unsplash.com/photo-1581092921461-eab10e6a5216",
    "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5"
  ],
  5: [
    "https://images.unsplash.com/photo-1572639083880-46e2c15560ad",
    "https://images.unsplash.com/photo-1597852074816-d933c7d2b988",
    "https://images.unsplash.com/photo-1554305448-5d5c853b438a"
  ],
  
  // Software projects
  6: [
    "https://images.unsplash.com/photo-1530508777238-14544088c3ed",
    "https://images.unsplash.com/photo-1570284613060-766c33850e00",
    "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6"
  ],
  7: [
    "https://images.unsplash.com/photo-1518365050014-70fe7232897f",
    "https://images.unsplash.com/photo-1614732484003-ef9881555dc3",
    "https://images.unsplash.com/photo-1610296669228-602fa827fc1f"
  ],
  8: [
    "https://images.unsplash.com/photo-1614732414444-096e5f1122d5",
    "https://images.unsplash.com/photo-1564053489984-317bbd824340",
    "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0"
  ]
};

// Maximum characters to show in collapsed state
const MAX_DESC_LENGTH = 150;

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Telescope");
  const [expandedProjects, setExpandedProjects] = useState<{[key: number]: boolean}>({});
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: number]: number}>({});
  
  // Initialize image indices
  useEffect(() => {
    const indices: {[key: number]: number} = {};
    [...telescopeProjects, ...hardwareProjects, ...softwareProjects].forEach(project => {
      indices[project.id] = 0;
    });
    setCurrentImageIndex(indices);
  }, []);
  
  // Rotate images for each project
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    [...telescopeProjects, ...hardwareProjects, ...softwareProjects].forEach(project => {
      const timer = setInterval(() => {
        setCurrentImageIndex(prev => {
          const images = projectImages[project.id];
          if (!images) return prev;
          
          return {
            ...prev,
            [project.id]: (prev[project.id] + 1) % images.length
          };
        });
      }, 3000 + (project.id * 500)); // Stagger the timing
      
      timers.push(timer);
    });
    
    return () => timers.forEach(timer => clearInterval(timer));
  }, []);
  
  // Get current projects based on selected category
  const getCurrentProjects = () => {
    switch(selectedCategory) {
      case "Telescope":
        return telescopeProjects;
      case "Hardware":
        return hardwareProjects;
      case "Software":
        return softwareProjects;
      default:
        return telescopeProjects;
    }
  };
  
  const toggleProjectExpand = (id: number) => {
    setExpandedProjects(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  // Should description be truncated with read more
  const shouldTruncate = (description: string) => {
    return description.length > MAX_DESC_LENGTH;
  };
  
  // Get truncated description
  const getTruncatedDescription = (description: string) => {
    if (description.length <= MAX_DESC_LENGTH) return description;
    return `${description.substring(0, MAX_DESC_LENGTH)}...`;
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
  }, [selectedCategory]);

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
      
      {/* Category Filter */}
      <section className="py-10 bg-space-dark border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <label className="block text-gray-300 mb-2 text-center font-semibold">Select Category</label>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-space-darker border border-gray-700 text-white rounded-lg p-2.5 w-full"
              >
                <option value="Telescope">Telescope</option>
                <option value="Hardware">Hardware</option>
                <option value="Software">Software</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="section bg-space-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 heading">{selectedCategory} Projects</h2>
            <div className="w-24 h-1 bg-space-purple mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCurrentProjects().map((project) => (
              <div key={project.id} className="space-card overflow-hidden group reveal">
                <div className="relative h-56">
                  {projectImages[project.id] && (
                    <img 
                      src={projectImages[project.id][currentImageIndex[project.id] || 0]} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-space-darker to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <div className="text-gray-300 mb-4">
                    {expandedProjects[project.id] || !shouldTruncate(project.description) ? (
                      project.description
                    ) : (
                      getTruncatedDescription(project.description)
                    )}
                    
                    {shouldTruncate(project.description) && (
                      <button 
                        onClick={() => toggleProjectExpand(project.id)} 
                        className="text-space-purple hover:text-space-purple-light transition-colors ml-2"
                      >
                        {expandedProjects[project.id] ? "Read less" : "Read more"}
                      </button>
                    )}
                  </div>
                  
                  {/* Added Report button */}
                  <div className="mt-6">
                    <a 
                      href={project.reportUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-space-blue/20 hover:bg-space-blue/30 text-space-blue-light rounded-md transition-colors"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Report
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
