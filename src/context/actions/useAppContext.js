import { useContext, useEffect } from 'react';
import { AppContext, initialState } from '../AppContext';
import {
    SET_DATA,
    SET_PERSISTENCE,
    RESET_STATE,
    SELECT_ANSWER
} from '../actionTypes';
import { convertQuestions, shuffleArray } from '../../utils/converters';
import ApiService from '../../services/ApiService';

export const useAppContext = () => {
    const { state, dispatch } = useContext(AppContext);
    const apiService = new ApiService()

    useEffect(() => {
        const state = localStorage.getItem('state');
        if (state) {
            const parsedState = JSON.parse(state);
            dispatch({ type: SET_PERSISTENCE, payload: parsedState });
        }
    }, []);

    const resetData = () => {
        dispatch({ type: RESET_STATE, payload: initialState });
    }

    const getData = async () => {
        try {
            const data = await apiService.getQuestions()
            const questions = convertQuestions(data.preguntas)
            const shuffledQuestions = shuffleArray(questions);
            dispatch({ type: SET_DATA, payload: shuffledQuestions });
        } catch (error) {
            throw error
        }
    };

    const selectSomeAnswer = (choice, questionId) => {
        const updatedQuestions = [...state.questions];
        const questionIndex = updatedQuestions
            .findIndex((question, index) => {
                return (index + 1) === Number(questionId)
            });
        if (questionIndex !== -1) {
            updatedQuestions[questionIndex].userAnswer = choice;
            dispatch({ type: SELECT_ANSWER, payload: updatedQuestions });
        } else {
            console.error('Pregunta no encontrada para questionId:', questionId);
        }
    }

    return {
        state,
        getData,
        resetData,
        selectSomeAnswer
    };
};