import React from 'react';

const LandingScreen: React.FC<{ startTest: () => void }> = ({ startTest }) => {
  return (
    <div className="landing-screen">
      <h1 className="landing-title">Welcome to the Personality Test</h1>
      <p className="landing-description">Discover your personality type by answering a few simple questions.</p>
      <button className="button start-button" onClick={startTest}>Start Personality Test</button>
    </div>
  );
};

export default LandingScreen;