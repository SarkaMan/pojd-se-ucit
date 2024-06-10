import React, { useState } from 'react';
import { useAnswer } from '../Exercise';

export const ExerciseOne = ({ children: correctAnswer, definitions }) => {
  const [answer, setAnswer] = useState('');
  const setAnswerValue = useAnswer(correctAnswer);

  const evaluateAnswer = (event) => {
    event.preventDefault();

    const answer = event.target.value;
    setAnswer(answer);

    if (answer === '') {
      setAnswerValue(null);
    } else {
      setAnswerValue(correctAnswer === answer);
    }
  };
  return (
    <>
      <select
        className="mt-1.5 ml-3 w-fit inline rounded-lg border-gray-300 text-gray-900 sm:text-sm focus:border-gray-400 focus:ring-gray-400 shadow-sm"
        value={answer}
        onChange={evaluateAnswer}
      >
        <option value=""></option>
        {Object.keys(definitions).map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};
