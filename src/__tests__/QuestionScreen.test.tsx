import React from 'react';
import { render, fireEvent,waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuestionScreen from '../components/QuestionScreen';



// Unit test for Question Screen
test('renders a question and options', () => {
  const mockQuestions = [
    {
      text: 'Do you enjoy social gatherings?',
      answers: [
        { text: 'Yes', value: 1 },
        { text: 'No', value: 0 },
      ],
    },
  ];
  const { getByText } = render(
    <QuestionScreen 
      questions={mockQuestions} 
      questionIndex={0} 
      handleAnswer={() => {}} 
      totalQuestions={1} 
    />
  );
  const questionElement = getByText(/Do you enjoy social gatherings?/i);
  const yesOption = getByText(/Yes/i);
  const noOption = getByText(/No/i);

  expect(questionElement).toBeInTheDocument();
  expect(yesOption).toBeInTheDocument();
  expect(noOption).toBeInTheDocument();
});

// Unit test for selecting an answer
test('allows the user to select an answer', () => {
  const mockQuestions = [
    {
      text: 'Do you enjoy social gatherings?',
      answers: [
        { text: 'Yes', value: 1 },
        { text: 'No', value: 0 },
      ],
    },
  ];

  const handleAnswer = jest.fn();


  const { getByRole } = render(
    <QuestionScreen 
      questions={mockQuestions} 
      questionIndex={0} 
      handleAnswer={handleAnswer} 
      totalQuestions={1} 
    />
  );
  const yesOption = getByRole('button', { name: /Yes/i });
  fireEvent.click(yesOption);
  expect(handleAnswer).toHaveBeenCalledWith(1);

});