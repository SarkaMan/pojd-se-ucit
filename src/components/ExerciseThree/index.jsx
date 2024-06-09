import React, { useState } from 'react';
import { useAnswer } from '../Exercise';

export const ExerciseThree = ({ children: correctAnswer, img }) => {
  const [answer, setAnswer] = useState('');
  const setAnswerValue = useAnswer(correctAnswer);
  const evaluateAnswer = (event) => {
    event.preventDefault();

    const userAnswer = event.target.value;
    setAnswer(userAnswer);
    if (userAnswer === '') {
      setAnswerValue(null);
    } else {
      const isCorrect =
        userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase();
      setAnswerValue(isCorrect);
    }
  };
  return (
    <div className="flex flex-col basis-1/4 items-center">
      <img src={`/exercise/${img}`} />
      <label>
        <span className="sr-only">Answer</span>
        <input
          className="mt-10 w-fit rounded-md border-gray-200 pe-10 shadow-sm sm:text-sm"
          type="text"
          onChange={evaluateAnswer}
        />
      </label>
    </div>
  );
};
