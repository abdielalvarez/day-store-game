import React from 'react';
import Wrapper from '../layout/Wrapper';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/actions/useAppContext';
import Text from '../components/Text';
import { determineWinOrLose, gameScoreFn } from '../utils/functions';
import MultipleButton from '../components/ButtonModule/MultipleButton';
import { dynamicButtonOptionThankyouPage } from '../utils/dynamicButtonsOptions';

function ThankyouPage() {
    const navigate = useNavigate();
    const {
        state,
        getData,
        resetData,
    } = useAppContext();

    const { questions } = state;

    const score = gameScoreFn(questions)
    const { winning, text} = determineWinOrLose(score)

    const buttonsOptions = dynamicButtonOptionThankyouPage(
        getData,
        resetData,
        navigate
    )

    return (
        <Wrapper>
            <div className='thankyoupage'>
                <div>
                    <div className='thankyoupage__container'>
                        <Text tag='h1' color='orange'>{text}</Text>
                        <Text tag='h1' color={winning ? 'green' : 'red'}>
                            Tu puntaje fue {score}/15
                        </Text>
                    </div>
                </div>
                <MultipleButton buttonsOptions={buttonsOptions} />
            </div>
        </Wrapper>
    );
}

export default ThankyouPage;
