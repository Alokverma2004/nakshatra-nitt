
import { useEffect, useRef } from 'react';

const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars(); // Recreate stars when resizing
    };
    
    // Star array to hold all stars
    let stars: {x: number, y: number, size: number, speed: number, brightness: number}[] = [];
    
    // Create stars
    const initStars = () => {
      // Clear existing stars
      stars = [];
      
      // Create a reasonable number of stars based on screen size
      const starCount = Math.min(Math.floor(window.innerWidth * window.innerHeight / 2000), 400);
      
      // Create stars with varying properties
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.05 + 0.02,
          brightness: Math.random() * 0.8 + 0.2
        });
      }
    };
    
    // Animation function
    const animate = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(13, 19, 33, 0.2)'; // Dark blue with slight transparency for trail effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw stars
      stars.forEach(star => {
        // Update star position
        star.y += star.speed;
        
        // Reset star position if it moves off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        
        // Draw star
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 2
        );
        
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.brightness})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Add a glow effect for larger stars
        if (star.size > 1.2) {
          const glowSize = star.size * 3;
          const glowGradient = ctx.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, glowSize
          );
          
          glowGradient.addColorStop(0, `rgba(110, 180, 255, ${star.brightness * 0.5})`);
          glowGradient.addColorStop(1, 'rgba(110, 180, 255, 0)');
          
          ctx.beginPath();
          ctx.arc(star.x, star.y, glowSize, 0, Math.PI * 2);
          ctx.fillStyle = glowGradient;
          ctx.fill();
        }
      });
      
      // Continue animation
      requestAnimationFrame(animate);
    };
    
    // Initialize and start animation
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ 
        background: 'linear-gradient(to bottom, #0d1321, #1a2333)'
      }}
    />
  );
};

export default StarBackground;
