import React, { useState } from 'react';
import { useAnswer } from '../Exercise';

export const ExerciseTwo = ({ children: correctAnswer }) => {
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
    <div className="w-fit inline">
      <label>
        <span className="sr-only">Answer</span>

        <input
          type="text"
          value={answer}
          onChange={evaluateAnswer}
          className="w-fit rounded-md border-gray-300 pe-10 shadow-sm sm:text-sm text-gray-900 focus:border-gray-400 focus:ring-gray-400"
        />
      </label>
    </div>
  );
};
