import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../pages/Home';
import { HOME_ROUTE } from '../../utils/routes';
import { AppProvider, initialState } from '../../context/AppContext';
import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

test('Home component renders StartGame within Wrapper', () => {
    const { getByText } = render(
        <AppProvider initialState={initialState}>
            <Router initialEntries={[HOME_ROUTE]}>
                <Routes>
                    <Route
                        path={HOME_ROUTE}
                        element={<Home />}
                    />
                </Routes>
            </Router>
        </AppProvider>
    );
    expect(getByText('Bienvenido al Juego de Preguntas (Quizz)')).toBeInTheDocument();
    expect(getByText('¿Estás listo para comenzar?')).toBeInTheDocument();
});
