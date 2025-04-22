import { useEffect, useState } from 'react';

const ScreenTransition = ({ onTransitionComplete }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    const timer = setTimeout(() => {
      setTimeout(() => {
        onTransitionComplete();
        // Reset to home page after link opens
        window.location.href = '/';
      }, 325);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, [onTransitionComplete]);

  return (
    <div className="screen-transition-container">
      <div className={`edge-transition ${isVisible ? 'visible' : ''}`}>
        <div className="edge top"></div>
        <div className="edge right"></div>
        <div className="edge bottom"></div>
        <div className="edge left"></div>
      </div>
    </div>
  );
};

export default ScreenTransition; 
