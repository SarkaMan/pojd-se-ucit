import React, { useState } from 'react';
import { useAnswer } from '../Exercise';

export const ExerciseTwo = ({ children: correctAnswer }) => {
  const [answer, setAnswer] = useState('');
  const setAnswerValue = useAnswer(correctAnswer);
  const evaluateAnswer = (event) => {
    event.preventDefault();

    const userAnswer = event.target.value;
    setAnswer(userAnswer);
    if (answer === '') {
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
          className="w-fit rounded-md border-gray-200 pe-10 shadow-sm sm:text-sm"
        />
      </label>
    </div>
  );
};
