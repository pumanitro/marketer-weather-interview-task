import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AnswerType, QuestionType } from 'helpers/types';

type AddAnswerPayloadType = {
  question: QuestionType;
  answer: AnswerType;
};

export type StoreAnswerType = {
  questionText: string;
  questionCategory: string;
  isAnsweredCorrectly: boolean;
};

export const answersSlice = createSlice({
  name: 'answers',
  initialState: [] as StoreAnswerType[],
  reducers: {
    addAnswer: (state, { payload }: PayloadAction<AddAnswerPayloadType>) => {
      // I can mutate it because of Immer library under the hood
      const newStoreAnswer = {
        questionText: payload.question.question,
        questionCategory: payload.question.category,
        isAnsweredCorrectly: payload.question.correct_answer === payload.answer,
      };

      state.push(newStoreAnswer);
    },
    clearAnswers: () => {
      return [];
    },
  },
});

export const { addAnswer, clearAnswers } = answersSlice.actions;
