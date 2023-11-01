import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Choice from '../../../components/ChoiceModule/Choice';
import { AppProvider } from '../../../context/AppContext';
import { QUESTION_ROUTE } from '../../../utils/routes';
import '@testing-library/jest-dom/extend-expect';

describe('Choice component', () => {
    it('renders a choice with the provided text', () => {
        const initialState = {
            questions: [
                {
                    questionId: '1'
                },
            ],
        };
        
        render(
            <AppProvider initialState={initialState}>
                <Router>
                    <Routes>
                        <Route
                            path={`${QUESTION_ROUTE}/:questionId`}
                            element={<Choice choice="A" text="Option" />}
                        />
                    </Routes>
                </Router>
            </AppProvider>
        );
    });
});
