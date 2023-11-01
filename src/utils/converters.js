export function shuffleArray(array) {
    return array
        .slice()
        .sort(() => Math.random() - 0.5)
        .slice(0, 15)
}

export function convertStateToQuestionFormat (
    state,
    questionId
) {
    const { questions } = state;
    const questionIndexId = questionId - 1
    const question = questions[questionIndexId];
    return { questions, question }
}

export function convertQuestions(data) {
    return data.map((item) => ({
        questionText: item.pregunta,
        choices: convertOptions(item.opciones),
        correctAnswer: convertCorrectAnswer(item.opciones, item.respuesta_correcta),
        userAnswer: null,
    }));
}

function convertOptions(options) {
    const choices = {};
    options.forEach((option, index) => {
        choices[String.fromCharCode(65 + index)] = option;
    });
    return choices;
}

function convertCorrectAnswer(options, correctAnswer) {
    const correctOptionIndex = options.indexOf(correctAnswer);
    return String.fromCharCode(65 + correctOptionIndex);
}