import {
  startGameFn,
  goToHomeFn,
  gameScoreFn,
  handleNextQuestion,
  determineWinOrLose,
  handleStyleAnswers,
} from '../../utils/functions';
import { QUESTION_ROUTE, THANK_YOU_ROUTE } from '../../utils/routes';

describe('startGameFn', () => {
  it('should navigate to the first question after getting data', async () => {
    const getData = jest.fn(() => Promise.resolve());
    const navigate = jest.fn();

    await startGameFn(getData, navigate);

    expect(getData).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith(`${QUESTION_ROUTE}/1`);
  });

  it('should throw an error if getting data fails', async () => {
    const getData = jest.fn(() => Promise.reject('Error'));
    const navigate = jest.fn();

    await expect(startGameFn(getData, navigate)).rejects.toEqual('Error');
  });
});

describe('goToHomeFn', () => {
  it('should reset data and navigate to the home route', () => {
    const resetData = jest.fn();
    const navigate = jest.fn();

    goToHomeFn(resetData, navigate);

    expect(resetData).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('/');
  });
});

describe('gameScoreFn', () => {
  it('should calculate the score correctly', () => {
    const questions = [
      { userAnswer: 'A', correctAnswer: 'A' },
      { userAnswer: 'B', correctAnswer: 'A' },
      { userAnswer: 'A', correctAnswer: 'B' },
      { userAnswer: 'C', correctAnswer: 'C' },
    ];

    const score = gameScoreFn(questions);

    expect(score).toBe(2);
  });
});

describe('handleNextQuestion', () => {
  it('should navigate to the next question route', () => {
    const navigate = jest.fn();
    handleNextQuestion(navigate, 2);
    expect(navigate).toHaveBeenCalledWith(`${QUESTION_ROUTE}/3`);
  });

  it('should navigate to the thank you route if the questionId is 15', () => {
    const navigate = jest.fn();
    handleNextQuestion(navigate, 15);
    expect(navigate).toHaveBeenCalledWith(THANK_YOU_ROUTE);
  });
});

describe('determineWinOrLose', () => {
  it('should determine the result as winning if the score is greater than 8', () => {
    const result = determineWinOrLose(9);
    expect(result.winning).toBe(true);
  });

  it('should determine the result as losing if the score is less than or equal to 8', () => {
    const result = determineWinOrLose(8);
    expect(result.winning).toBe(false);
  });

  it('should set the text correctly', () => {
    const result = determineWinOrLose(9);
    expect(result.text).toBe('¡Has ganado! ¡Gracias por jugar!');
  });
});

describe('handleStyleAnswers', () => {
  it('should return an empty string for null userAnswer or incorrect choice', () => {
    const style = handleStyleAnswers('A', null, 'B');
    expect(style).toBe('');

    const style2 = handleStyleAnswers('A', 'C', 'B');
    expect(style2).toBe('');
  });

  it('should return -correct for correct choice', () => {
    const style = handleStyleAnswers('A', 'A', 'A');
    expect(style).toBe('-correct');
  });

  it('should return -incorrect for incorrect choice', () => {
    const style = handleStyleAnswers('A', 'A', 'B');
    expect(style).toBe('-incorrect');
  });
});
