import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from '../pages/Home';
import Question from '../pages/Question';
import ThankyouPage from '../pages/ThankyouPage';
import { QUESTION_ROUTE, THANK_YOU_ROUTE, HOME_ROUTE } from '../utils/routes';

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={`${QUESTION_ROUTE}/:questionId`} element={<Question />} />
        <Route path={THANK_YOU_ROUTE} element={<ThankyouPage />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;
