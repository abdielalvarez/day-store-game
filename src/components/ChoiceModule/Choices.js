import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../../context/actions/useAppContext';
import Choice from './Choice';
import { initialQuestion } from '../../mocks/question';
import { convertStateToQuestionFormat } from '../../utils/converters';

function Choices() {
    const { questionId } = useParams();
    const {
        state,
        selectSomeAnswer
    } = useAppContext();

    const { question } = convertStateToQuestionFormat(state, questionId)
    const { choices, userAnswer } = question || initialQuestion

    const handleAnswerSelect = (choice) => {
        if (!userAnswer) selectSomeAnswer(choice, questionId)
    };

    return (
        <ul className="choices">
            {Object.entries(choices).map(([choice, text], index) => {
                return (
                    <Choice
                        key={index}
                        choice={choice}
                        text={text}
                        handleAnswerSelect={handleAnswerSelect}
                    />
                )
            })}
        </ul>
    );
}

export default Choices;
