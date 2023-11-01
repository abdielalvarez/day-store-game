import React from 'react';
import Wrapper from '../layout/Wrapper';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppContext } from '../context/actions/useAppContext';
import Text from '../components/Text';
import { gameScoreFn } from '../utils/functions';
import Choices from '../components/ChoiceModule/Choices';
import { initialQuestion } from '../mocks/question';
import { convertStateToQuestionFormat } from '../utils/converters';
import ReplyAnswer from '../components/ReplyAnswer';
import MultipleButton from '../components/ButtonModule/MultipleButton';
import { dynamicButtonOptionQuestions } from '../utils/dynamicButtonsOptions';

function Question() {
    const { questionId } = useParams();
    const navigate = useNavigate();
    const {
        state,
        resetData
    } = useAppContext();

    const { questions, question } = convertStateToQuestionFormat(state, questionId)
    const { questionText, userAnswer } = question || initialQuestion

    const buttonsOptions = dynamicButtonOptionQuestions(
        questionId,
        resetData,
        userAnswer,
        navigate
    )

    return (
        <Wrapper>
            <div className="question">
                <div className='question__container'>
                    <Text tag='h1' color='white'>{questionText}</Text>
                    <Text tag='h2' color='orange'>Puntaje: {gameScoreFn(questions)}</Text>
                    <Choices />
                    <ReplyAnswer />
                </div>
                <MultipleButton buttonsOptions={buttonsOptions} />
            </div>
        </Wrapper>
    );
}

export default Question;
