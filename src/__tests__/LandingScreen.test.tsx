import React from 'react';
import { render, fireEvent,waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';


test('renders the landing screen with start button', async () => {
    const { getByText, queryByText } = render(<App />);
    await waitFor(() => expect(queryByText(/Loading/i)).not.toBeInTheDocument());
    const startButton = getByText(/Start Personality Test/i);
    expect(startButton).toBeInTheDocument();
  });