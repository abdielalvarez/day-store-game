import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../../context/actions/useAppContext';
import { handleStyleAnswers } from '../../utils/functions';
import { initialQuestion } from '../../mocks/question';
import { convertStateToQuestionFormat } from '../../utils/converters';

function Choice({
    choice,
    text,
    handleAnswerSelect
}) {

    const { questionId } = useParams();
    const {
        state,
    } = useAppContext();

    const { question } = convertStateToQuestionFormat(state, questionId)
    const { correctAnswer, userAnswer } = question || initialQuestion

    const answerStyle = handleStyleAnswers(
        choice,
        userAnswer,
        correctAnswer
    )

    return (
        <li
            key={choice}
            onClick={() => handleAnswerSelect(
                choice,
                userAnswer,
                correctAnswer
            )}
            className={`choice__item ${
                userAnswer === choice ? 'selected' : ''
            }`}
            data-testid={`choice-${choice}`}
        >
            <div className={`choice__item-circle${answerStyle}`}>
                {choice}
            </div>
            <div className={`choice__item-label${answerStyle}`}>
                {text}
            </div>
        </li>
                
    );
}

export default Choice;
