import React from 'react';

type NavigationButtonsProps = {
    currentQuestionIndex: number;
    setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
    navigate: any; // Replace 'any' with the correct type if available
    answerProvided: boolean;
    setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
    totalQuestions: number;
  };


const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  currentQuestionIndex,
  setCurrentQuestionIndex,
  navigate,
  answerProvided,
  setShowDialog,
  totalQuestions,
}) => (    <div
      className="navigation-buttons"
      style={{ justifyContent: currentQuestionIndex > 0 ? 'space-between' : 'flex-end' }}
    >
      {currentQuestionIndex > 0 && (
        <button
          className="navigate-btn"
          onClick={() => {
            const prevIndex = currentQuestionIndex - 1;
            setCurrentQuestionIndex(prevIndex);
            navigate(`/question/${prevIndex}`);
          }}
        >
          Previous
        </button>
      )}
      {currentQuestionIndex + 1 < totalQuestions && (
        <button
          className="navigate-btn"
          onClick={() => {
            if (answerProvided) {
              const nextIndex = currentQuestionIndex + 1;
              setCurrentQuestionIndex(nextIndex);
              navigate(`/question/${nextIndex}`);
            } else {
              setShowDialog(true);
            }
          }}
        >
          Next
        </button>
      )}
    </div>
  );

export default NavigationButtons;  