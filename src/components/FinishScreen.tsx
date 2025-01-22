import React from 'react';

type FinishScreenProps = {
  personality: string;
  restartTest: () => void;
  highlightColor: string;
};

const FinishScreen: React.FC<FinishScreenProps> = ({ personality, restartTest, highlightColor }) => {
  return (
    <div className="finish-screen">
      <h1 className="finish-title">
        Your Personality Trait is: 
        <span className="personality-highlight" style={{ color: highlightColor }}>
        {personality || 'Unknown'}       
        </span>
      </h1>
      <p className="finish-description">Thank you for completing the personality test. We hope you enjoyed it!</p>
      <button className="button restart-button" onClick={restartTest}>Take the Test Again</button>
    </div>
  );
};
export default FinishScreen;