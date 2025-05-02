
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-space-dark flex flex-col items-center justify-center px-4">
      <div className="relative">
        <div className="absolute -inset-1">
          <div className="w-full h-full bg-nebula-gradient opacity-75 blur-lg"></div>
        </div>
        
        <div className="relative space-card p-8 md:p-12 text-center max-w-lg">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-space-purple mb-6">Lost in Space</h2>
          <p className="text-gray-300 mb-8">
            The page you're looking for seems to have drifted into a black hole. Let's navigate back to familiar cosmic territory.
          </p>
          <Link to="/" className="btn-primary inline-block">
            Return to Home
          </Link>
        </div>
      </div>
      
      {/* Star background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div 
            key={i}
            className={`star animate-twinkle-${i % 2 === 0 ? 'slow' : 'fast'}`}
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default NotFound;
