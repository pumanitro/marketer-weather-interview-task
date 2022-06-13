import { StoreAnswerType } from '../Slices/answersSlice';

export const scoreSelector = (answers: StoreAnswerType[]) =>
  answers.reduce((acc, answer) => {
    if (answer.isAnsweredCorrectly) {
      return (acc += 1);
    }
    return acc;
  }, 0);
