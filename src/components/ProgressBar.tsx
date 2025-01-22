import React from 'react';

type ProgressBarProps = {
    currentQuestionIndex: number;
    totalQuestions: number;
 };

    const ProgressBar : React.FC<ProgressBarProps> = ({
        currentQuestionIndex,
        totalQuestions,
      }) => (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div
          className="progress-bar-inner"
          style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
        ></div>
      </div>
    </div>
  );

  export default ProgressBar;