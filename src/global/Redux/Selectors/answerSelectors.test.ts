import { scoreSelector } from './aswerSelectors';

test('properly calculates score based on answers', () => {
  const mockedAnswers = [
    {
      questionText: 'first',
      questionCategory: 'first',
      isAnsweredCorrectly: true,
    },
    {
      questionText: 'second',
      questionCategory: 'second',
      isAnsweredCorrectly: true,
    },
  ];

  expect(scoreSelector(mockedAnswers)).toBe(2);
});
