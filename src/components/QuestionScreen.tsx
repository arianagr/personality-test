import React from 'react';

const QuestionScreen: React.FC<{ questions: { text: string; answers: { text: string; value: number }[] }[], questionIndex: number, handleAnswer: (value: number) => void, totalQuestions: number }> = ({ questions, questionIndex, handleAnswer, totalQuestions }) => {
  const currentQuestion = questions[questionIndex];

  return (
    <div className="question-screen">
      <h2 className="question-title">{questions[questionIndex].text}</h2>
      <div className="answers-container">
        {questions[questionIndex].answers.map((answer) => (
          <button className="button answer-button" key={answer.text} onClick={() => handleAnswer(answer.value)}>
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
};


export default QuestionScreen;