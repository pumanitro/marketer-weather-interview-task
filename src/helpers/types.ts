export type AnswerType = 'True' | 'False';

export type QuestionType = {
  category: string;
  type: 'boolean';
  difficulty: 'hard';
  question: string;
  correct_answer: AnswerType;
  incorrect_answers: AnswerType[];
};
