import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/actions/useAppContext';
import Text from '../components/Text';
import { initialQuestion } from '../mocks/question';
import { convertStateToQuestionFormat } from '../utils/converters';

function ReplyAnswer() {
    const { questionId } = useParams();
    const {
        state
    } = useAppContext();

    const { question } = convertStateToQuestionFormat(state, questionId)
    const { choices, correctAnswer, userAnswer } = question || initialQuestion
    const isAnswerCorrect = userAnswer === correctAnswer;

    return (
        <>
            {userAnswer ? (
                <>
                    {isAnswerCorrect ? (
                        <Text tag='p' color='white'>¡Respuesta correcta!</Text>
                    ) : (
                        <Text tag='p' color='white'>
                            Respuesta incorrecta. La respuesta
                            correcta es: {choices[correctAnswer]}
                        </Text>
                    )}
                </>
            ) : null}
        </>       
    );
}

export default ReplyAnswer;
