import {
    HOME_ROUTE,
    QUESTION_ROUTE,
    THANK_YOU_ROUTE
} from "./routes";

export const startGameFn = async (
    getData,
    navigate
) => {
    try {
      await getData()
      navigate(`${QUESTION_ROUTE}/1`)
    } catch (err) {
      throw err
    }
};

export const goToHomeFn = (
    resetData,
    navigate
) => {
    resetData()
    navigate(`${HOME_ROUTE}`)
}

export const gameScoreFn = (questions) => {
    const score = questions?.reduce((acc, cur) => {
        if (
            cur.userAnswer !== null &&
            cur.userAnswer === cur.correctAnswer
        ) {
            return acc + 1;
        }
        return acc;
    }, 0)
    return score
}

export const handleNextQuestion = (
    navigate,
    questionId
) => {
    if (questionId == 15) {
        navigate(`${THANK_YOU_ROUTE}`)
        return
    }
    navigate(`${QUESTION_ROUTE}/${Number(questionId) + 1}`)
    return
}

export const determineWinOrLose = (score) => {
    const winning = score > Number(8)
    const results = {
        winning,
        text: ''
    }
    if (winning) results['text'] = '¡Has ganado!'
    if (!winning) results['text'] = '¡Has perdido!'
    results['text'] = `${results['text']} ¡Gracias por jugar!`
    return results
}

export const handleStyleAnswers = (
    choice,
    userAnswer,
    correctAnswer
) => {
    if (userAnswer === null ||
        (choice !== userAnswer &&
            choice !== correctAnswer)
    ) return ''
    if (choice === correctAnswer) return '-correct'
    if (choice !== correctAnswer) return '-incorrect'
}