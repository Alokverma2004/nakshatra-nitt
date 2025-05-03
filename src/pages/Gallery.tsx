
import { useState, useEffect } from 'react';

// Sample gallery images
const galleryImages = [
  {
    id: 1,
    title: "Milky Way Over Mountains",
    category: "Astrophotography",
    src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    description: "The Milky Way galaxy captured over mountain ranges during a clear night."
  },
  {
    id: 2,
    title: "Telescope Observation",
    category: "Stardust",
    src: "https://images.unsplash.com/photo-1465101162946-4377e57745c3",
    description: "Students using the telescope during one of our stargazing sessions."
  },
  {
    id: 3,
    title: "Solar Eclipse",
    category: "National space day",
    src: "https://images.unsplash.com/photo-1532798442725-41036acc7489",
    description: "Partial solar eclipse observed during our eclipse viewing event."
  },
  {
    id: 4,
    title: "Harvest Moon",
    category: "Astrophotography",
    src: "https://images.unsplash.com/photo-1504333638930-c8787321eee0",
    description: "Beautiful harvest moon captured during our astrophotography workshop."
  },
  {
    id: 5,
    title: "Workshop Session",
    category: "World space week",
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    description: "Students participating in our astronomy workshop on constellation identification."
  },
  {
    id: 6,
    title: "Northern Lights",
    category: "Astrophotography",
    src: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73",
    description: "Aurora Borealis captured during the club's expedition to northern latitudes."
  },
  {
    id: 7,
    title: "Student Competition",
    category: "World space week",
    src: "https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700",
    description: "Participants during our annual astronomy quiz competition."
  },
  {
    id: 8,
    title: "Star Trails",
    category: "Astrophotography",
    src: "https://images.unsplash.com/photo-1500673587002-1d2548cfba1b",
    description: "Long-exposure photograph showing star trails around the celestial pole."
  },
  {
    id: 9,
    title: "Observatory Visit",
    category: "National space day",
    src: "https://images.unsplash.com/photo-1572639083880-46e2c15560ad",
    description: "Club members visiting the regional observatory as part of our annual field trip."
  },
  {
    id: 10,
    title: "Meteor Shower",
    category: "Stardust",
    src: "https://images.unsplash.com/photo-1596445836561-991bcd39a86d",
    description: "Perseid meteor shower captured during our overnight observation session."
  },
  {
    id: 11,
    title: "Public Outreach",
    category: "World space week",
    src: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031",
    description: "Club members conducting a public outreach program at the community science fair."
  },
  {
    id: 12,
    title: "Moon Close-up",
    category: "Stardust",
    src: "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe",
    description: "Detailed photograph of lunar craters taken with our telescope and camera setup."
  }
];

// Updated image categories for filtering
const categories = ["All", "Astrophotography", "Stardust", "National space day", "World space week"];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  
  // Filter images by category
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === selectedCategory));
    }
  }, [selectedCategory]);
  
  // Handle lightbox open
  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };
  
  // Handle lightbox close
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };
  
  // Navigate to next or previous image
  const navigateImage = (direction: 'next' | 'prev') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    if (currentIndex === -1) return;
    
    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex].id);
    } else {
      const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      setSelectedImage(filteredImages[prevIndex].id);
    }
  };
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, filteredImages]);
  
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
  }, [filteredImages]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-space-darker">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-space-purple/30 via-transparent to-transparent opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6 text-white">
            Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore a collection of astronomical photographs and moments from our events
          </p>
        </div>
      </section>
      
      {/* Gallery Filter */}
      <section className="py-10 bg-space-dark">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-space-purple text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="section bg-space-dark">
        <div className="container mx-auto px-4">
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image) => (
                <div 
                  key={image.id} 
                  className="aspect-square overflow-hidden rounded-lg cursor-pointer relative group reveal"
                  onClick={() => openLightbox(image.id)}
                >
                  <img 
                    src={image.src} 
                    alt={image.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-end justify-start p-4 opacity-0 group-hover:opacity-100">
                    <div>
                      <h3 className="text-white font-semibold">{image.title}</h3>
                      <p className="text-white/80 text-sm">{image.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-300 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col">
            {/* Close button */}
            <button 
              onClick={closeLightbox}
              className="absolute -top-10 right-0 text-white hover:text-space-purple transition-colors"
              aria-label="Close lightbox"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Navigation buttons */}
            <button 
              onClick={() => navigateImage('prev')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 p-2 text-white rounded-r-lg transition-colors"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={() => navigateImage('next')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 p-2 text-white rounded-l-lg transition-colors"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Image */}
            <div className="h-full flex items-center justify-center overflow-hidden">
              {filteredImages.filter(img => img.id === selectedImage).map(image => (
                <img 
                  key={image.id}
                  src={image.src}
                  alt={image.title}
                  className="max-w-full max-h-[70vh] object-contain"
                />
              ))}
            </div>
            
            {/* Caption */}
            <div className="mt-4 text-center">
              {filteredImages.filter(img => img.id === selectedImage).map(image => (
                <div key={image.id}>
                  <h3 className="text-xl font-bold text-white">{image.title}</h3>
                  <p className="text-gray-300 mt-1">{image.description}</p>
                  <p className="text-space-purple mt-1">{image.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
