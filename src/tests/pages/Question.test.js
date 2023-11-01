import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Question from '../../pages/Question';
import { AppProvider } from '../../context/AppContext';

test('Question component renders correctly', () => {
  const initialState = {
    questions: [
      {
        questionId: '1',
        questionText: 'What is the capital of France?',
        userAnswer: null,
      },
      {
        questionId: '2',
        questionText: 'What is 2 + 2?',
        userAnswer: null,
      },
    ],
  };

  render(
    <AppProvider initialState={initialState}>
      <MemoryRouter initialEntries={['/questions/1']}>
        <Routes>
          <Route path="/questions/:questionId" element={<Question />} />
        </Routes>
      </MemoryRouter>
    </AppProvider>
  );
})