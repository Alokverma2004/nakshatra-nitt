
import { useEffect, useRef, useState } from 'react';

const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Handle mouse movement for parallax effect
  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      setDimensions({ width: innerWidth, height: innerHeight });
      initStars(); // Recreate stars when resizing
    };
    
    // Star arrays to hold different types of stars
    let backgroundStars: {x: number, y: number, size: number, opacity: number, twinkleSpeed: number}[] = [];
    let midgroundStars: {x: number, y: number, size: number, opacity: number, twinkleSpeed: number}[] = [];
    let foregroundStars: {x: number, y: number, size: number, opacity: number, twinkleSpeed: number}[] = [];
    
    // Create stars
    const initStars = () => {
      // Clear existing stars
      backgroundStars = [];
      midgroundStars = [];
      foregroundStars = [];
      
      // Create stars with varying properties - reduced count for less visual intensity
      const starCount = Math.min(Math.floor(window.innerWidth * window.innerHeight / 1500), 200);
      
      // Background stars (smallest, most numerous)
      for (let i = 0; i < starCount * 0.6; i++) {
        backgroundStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1 + 0.3,
          opacity: Math.random() * 0.3 + 0.2,
          twinkleSpeed: Math.random() * 0.01 + 0.002
        });
      }
      
      // Midground stars
      for (let i = 0; i < starCount * 0.3; i++) {
        midgroundStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.8,
          opacity: Math.random() * 0.4 + 0.3,
          twinkleSpeed: Math.random() * 0.015 + 0.005
        });
      }
      
      // Foreground stars (largest, brightest, least numerous)
      for (let i = 0; i < starCount * 0.1; i++) {
        foregroundStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1.2,
          opacity: Math.random() * 0.5 + 0.4,
          twinkleSpeed: Math.random() * 0.02 + 0.01
        });
      }
    };
    
    // Draw a single star
    const drawStar = (
      x: number, 
      y: number, 
      size: number, 
      opacity: number, 
      color = '#FFFFFF', 
      glowColor = 'rgba(110, 180, 255, 0.6)'
    ) => {
      // Check for invalid values before drawing
      if (!isFinite(x) || !isFinite(y) || !isFinite(size) || !isFinite(opacity)) {
        console.warn('Invalid star parameters:', { x, y, size, opacity });
        return; // Skip drawing this star if values are invalid
      }

      ctx.beginPath();
      
      // Main star body
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.fill();
      
      // Glow effect - Only create gradient if size is valid
      if (size > 0) {
        const glowRadius = size * 2.5; // Reduced glow radius
        try {
          const gradient = ctx.createRadialGradient(
            x, y, 0,
            x, y, glowRadius
          );
          gradient.addColorStop(0, glowColor.replace('0.6', (opacity * 0.8).toString()));
          gradient.addColorStop(1, 'rgba(110, 180, 255, 0)');
          
          ctx.beginPath();
          ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        } catch (error) {
          console.error('Error creating gradient:', error);
        }
      }
      
      // Add rays for larger stars - simplified for less visual noise
      if (size > 1.8) {
        const rayLength = size * 4;
        const rayWidth = size * 0.3;
        
        // Horizontal ray
        ctx.beginPath();
        ctx.moveTo(x - rayLength, y);
        ctx.lineTo(x + rayLength, y);
        ctx.lineWidth = rayWidth;
        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`;
        ctx.stroke();
        
        // Vertical ray
        ctx.beginPath();
        ctx.moveTo(x, y - rayLength);
        ctx.lineTo(x, y + rayLength);
        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`;
        ctx.stroke();
      }
    };
    
    // Animation state
    let time = 0;
    
    // Animation function
    const animate = () => {
      // Clear canvas with a deeper space background and slight trail effect
      ctx.fillStyle = 'rgba(4, 9, 22, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Increment time
      time += 0.004; // Slowed down animation
      
      // Calculate parallax offsets based on mouse position
      const maxOffset = 3; // Reduced parallax effect
      const centerX = dimensions.width / 2;
      const centerY = dimensions.height / 2;
      
      const offsetX = ((mousePosition.x - centerX) / centerX) * maxOffset;
      const offsetY = ((mousePosition.y - centerY) / centerY) * maxOffset;
      
      // Draw stars with parallax effect
      // Background stars (minimal parallax)
      for (const star of backgroundStars) {
        const opacity = Math.sin(time * star.twinkleSpeed * 10) * 0.15 + star.opacity;
        drawStar(
          star.x + offsetX * 0.1, 
          star.y + offsetY * 0.1, 
          star.size, 
          opacity, 
          '#FFFFFF', 
          'rgba(255, 255, 255, 0.3)'
        );
      }
      
      // Midground stars (medium parallax)
      for (const star of midgroundStars) {
        const opacity = Math.sin(time * star.twinkleSpeed * 15) * 0.2 + star.opacity;
        drawStar(
          star.x + offsetX * 0.3, 
          star.y + offsetY * 0.3, 
          star.size, 
          opacity, 
          '#FFFFFF', 
          'rgba(180, 210, 255, 0.4)'
        );
      }
      
      // Foreground stars (most parallax)
      for (const star of foregroundStars) {
        const opacity = Math.sin(time * star.twinkleSpeed * 20) * 0.25 + star.opacity;
        drawStar(
          star.x + offsetX * 0.6, 
          star.y + offsetY * 0.6, 
          star.size, 
          opacity, 
          '#FFFFFF', 
          'rgba(110, 180, 255, 0.5)'
        );
      }
      
      // Add occasional shooting stars - reduced frequency
      if (Math.random() < 0.0005) {
        const shootingStar = {
          x: Math.random() * canvas.width,
          y: Math.random() * (canvas.height / 3),
          length: Math.random() * 80 + 40,
          angle: Math.PI / 4 + (Math.random() * Math.PI / 4),
          speed: Math.random() * 4 + 8
        };
        
        setTimeout(() => {
          drawShootingStar(shootingStar.x, shootingStar.y, shootingStar.length, shootingStar.angle, shootingStar.speed);
        }, Math.random() * 2000);
      }
      
      // Continue animation
      requestAnimationFrame(animate);
    };
    
    // Draw a shooting star
    const drawShootingStar = (startX: number, startY: number, length: number, angle: number, speed: number) => {
      let currentLength = 0;
      let opacity = 0.8;
      
      const animateShootingStar = () => {
        if (currentLength <= length && opacity > 0) {
          // Calculate end point
          const endX = startX + Math.cos(angle) * currentLength;
          const endY = startY + Math.sin(angle) * currentLength;
          
          // Draw line
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(endX, endY);
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
          
          // Trail glow
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.lineTo(endX, endY);
          ctx.strokeStyle = `rgba(110, 180, 255, ${opacity * 0.4})`;
          ctx.lineWidth = 3;
          ctx.stroke();
          
          // Update for next frame
          currentLength += speed;
          if (currentLength > length / 2) {
            opacity -= 0.05;
          }
          
          requestAnimationFrame(animateShootingStar);
        }
      };
      
      animateShootingStar();
    };
    
    // Initialize and start animation
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    resizeCanvas();
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePosition, dimensions]);
  
  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ 
        background: 'radial-gradient(circle at center, #0c1a2c 0%, #071224 70%, #040b18 100%)'
      }}
    />
  );
};

export default StarBackground;
