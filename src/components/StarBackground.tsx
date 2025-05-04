
import { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  twinkleSpeed: number;
}

const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Handle mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };
    
    const initStars = () => {
      const starCount = Math.min(Math.floor(window.innerWidth * window.innerHeight / 2500), 300); // More stars
      starsRef.current = Array(starCount).fill(0).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 0.5, // Slightly larger stars
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.01 + 0.002,
        twinkleSpeed: Math.random() * 0.03 + 0.005 // Faster twinkling
      }));
    };
    
    const drawStars = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate parallax effect based on mouse position
      const parallaxX = (mousePosition.x - window.innerWidth / 2) * 0.005;
      const parallaxY = (mousePosition.y - window.innerHeight / 2) * 0.005;
      
      starsRef.current.forEach(star => {
        // Update opacity for twinkling
        star.opacity += Math.sin(time * star.twinkleSpeed) * 0.02;
        star.opacity = Math.max(0.2, Math.min(1, star.opacity));
        
        // Move stars slowly and add parallax effect
        star.y += star.speed;
        
        // Parallax effect - stars move slightly in opposition to mouse movement
        const drawX = star.x + parallaxX * (star.size * 0.5);
        const drawY = star.y + parallaxY * (star.size * 0.5);
        
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        
        // Draw the star
        ctx.beginPath();
        ctx.arc(drawX, drawY, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
        
        // Add glow effect for brighter stars
        if (star.size > 1.5) {
          const gradient = ctx.createRadialGradient(
            drawX, drawY, 0,
            drawX, drawY, star.size * 3
          );
          gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity * 0.5})`);
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          
          ctx.beginPath();
          ctx.arc(drawX, drawY, star.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      });
      
      requestAnimationFrame(drawStars);
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    const animationId = requestAnimationFrame(drawStars);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [mousePosition]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default StarBackground;
