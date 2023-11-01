import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AppProvider } from '../../context/AppContext';
import ThankyouPage from '../../pages/ThankyouPage';
import { initialState } from '../../context/AppContext';
import { THANK_YOU_ROUTE } from '../../utils/routes';

test('ThankyouPage component renders correctly', () => {
    render(
        <AppProvider initialState={initialState}>
            <MemoryRouter initialEntries={[THANK_YOU_ROUTE]}>
                <Routes>
                    <Route
                        path={THANK_YOU_ROUTE}
                        element={<ThankyouPage />}
                    />
                </Routes>
            </MemoryRouter>
        </AppProvider>
    );
});

