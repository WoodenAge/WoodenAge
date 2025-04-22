import { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import ScreenTransition from './components/ScreenTransition';
import './styles/global.css';

const App = () => {
  const [showTransition, setShowTransition] = useState(false);

  const handleLinkedInClick = (e) => {
    e.preventDefault();
    setShowTransition(true);
  };

  const handleTransitionComplete = () => {
    window.open('https://www.linkedin.com/in/matt-chiu/', '_blank');
    setShowTransition(false);
  };

  return (
    <div className="app">
      <CustomCursor />
      {showTransition && (
        <ScreenTransition onTransitionComplete={handleTransitionComplete} />
      )}
      <div className="content">
        <h1>MATTHEW CHIU</h1>
        <p>An aspiring Product Manager - Building to impact as many users as possible</p>
      </div>
      <div className="button-container">
        <a
          href="https://www.linkedin.com/in/matt-chiu/" 
          onClick={handleLinkedInClick}
          target="_blank" 
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default App; 