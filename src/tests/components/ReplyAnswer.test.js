import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ReplyAnswer from '../../components/ReplyAnswer';
import { AppProvider } from '../../context/AppContext';
import '@testing-library/jest-dom/extend-expect';

describe('ReplyAnswer component', () => {
  it('renders "Respuesta correcta" when the answer is correct', () => {
    const initialState = {
      questions: {
        '1': {
          choices: {
            A: 'Option A',
          },
          userAnswer: 'A',
          correctAnswer: 'A',
        },
      },
    };

    render(
      <AppProvider initialState={initialState}>
        <MemoryRouter initialEntries={['/questions/1']}>
          <Routes>
            <Route path="/questions/:questionId" element={<ReplyAnswer />} />
          </Routes>
        </MemoryRouter>
      </AppProvider>
    );
  });

  it('renders "Respuesta incorrecta" when the answer is incorrect', () => {
    const initialState = {
      questions: {
        '1': {
          choices: {
            A: 'Option A',
          },
          userAnswer: 'B',
          correctAnswer: 'A',
        },
      },
    };

    render(
      <AppProvider initialState={initialState}>
        <MemoryRouter initialEntries={['/questions/1']}>
          <Routes>
            <Route path="/questions/:questionId" element={<ReplyAnswer />} />
          </Routes>
        </MemoryRouter>
      </AppProvider>
    );
  });

  it('does not render anything when userAnswer is null', () => {
    const initialState = {
      questions: {
        '1': {
          choices: {
            A: 'Option A',
          },
          userAnswer: null,
          correctAnswer: 'A',
        },
      },
    };

    render(
      <AppProvider initialState={initialState}>
        <MemoryRouter initialEntries={['/questions/1']}>
          <Routes>
            <Route path="/questions/:questionId" element={<ReplyAnswer />} />
          </Routes>
        </MemoryRouter>
      </AppProvider>
    );
  });
});
