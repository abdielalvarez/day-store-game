import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AppProvider } from '../../../context/AppContext';
import Choices from '../../../components/ChoiceModule/Choices';
import '@testing-library/jest-dom/extend-expect';

const mockSelectSomeAnswer = jest.fn();

describe('Choices component', () => {
  it('renders a list of choices', () => {
    const initialState = {
      questions: {
        '1': {
          choices: {
            A: 'Option A',
            B: 'Option B',
            C: 'Option C'
          },
          userAnswer: null,
        },
      },
    };

    render(
      <AppProvider initialState={initialState} selectSomeAnswer={mockSelectSomeAnswer}>
        <MemoryRouter initialEntries={['/questions/1']}>
          <Routes>
            <Route path="/questions/:questionId" element={<Choices />} />
          </Routes>
        </MemoryRouter>
      </AppProvider>
    );
    const choiceA = screen.getByText('A');
    const choiceB = screen.getByText('B');
    const choiceC = screen.getByText('C');

    expect(choiceA).toBeInTheDocument();
    expect(choiceB).toBeInTheDocument();
    expect(choiceC).toBeInTheDocument();
  });

  it('calls selectSomeAnswer when a choice is clicked', () => {
    const initialState = {
      questions: {
        '1': {
          choices: {
            A: 'Option A',
          },
          userAnswer: null,
        },
      },
    };

    render(
      <AppProvider initialState={initialState} selectSomeAnswer={mockSelectSomeAnswer}>
        <MemoryRouter initialEntries={['/questions/1']}>
          <Routes>
            <Route path="/questions/:questionId" element={<Choices />} />
          </Routes>
        </MemoryRouter>
      </AppProvider>
    );

    const choiceA = screen.getByText('A');
    fireEvent.click(choiceA);
  });
});
