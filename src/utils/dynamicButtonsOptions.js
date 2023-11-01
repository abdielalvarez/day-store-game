import { goToHomeFn, handleNextQuestion, startGameFn } from "./functions"

export const dynamicButtonOptionQuestions = (
    questionId,
    resetData,
    userAnswer,
    navigate
) => {
    return [
        {
            dissapearButton: questionId == 15,
            onClick: () => goToHomeFn(resetData, navigate),
            theme: 'secondary',
            label: 'Salir del juego'
        },
        {
            onClick: () => handleNextQuestion(navigate, questionId),
            theme: 'tertiary',
            disabled: !Boolean(userAnswer),
            label: questionId == 15 ?
                'Ver resultados' :
                'Siguiente pregunta',
        }
    ]
}

export const dynamicButtonOptionThankyouPage = (
    getData,
    resetData,
    navigate
) => {
    return [
        {
            onClick: () => startGameFn(getData, navigate),
            theme: 'secondary',
            label: 'Volver a jugar'
        },
        {
            onClick: () => goToHomeFn(resetData, navigate),
            theme: 'tertiary',
            label: 'Volver al inicio'
        }
    ]
}