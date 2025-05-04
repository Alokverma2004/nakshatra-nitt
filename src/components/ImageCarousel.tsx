
import React, { useState, useEffect } from 'react';

interface ImageCarouselProps {
  images: string[];
  interval?: number; // in milliseconds
  className?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images, 
  interval = 3000,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);
    
    return () => clearInterval(timer);
  }, [images.length, interval]);
  
  if (images.length === 0) return null;
  
  if (images.length === 1) {
    return (
      <div className={`relative rounded-lg overflow-hidden ${className}`}>
        <img 
          src={images[0]} 
          alt="Featured" 
          className="w-full h-full object-cover"
        />
      </div>
    );
  }
  
  return (
    <div className={`relative rounded-lg overflow-hidden ${className}`}>
      {images.map((src, index) => (
        <img 
          key={index}
          src={src} 
          alt={`Image ${index + 1}`} 
          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

export default ImageCarousel;
