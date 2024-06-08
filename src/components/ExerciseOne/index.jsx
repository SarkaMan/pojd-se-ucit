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
      <select value={answer} onChange={evaluateAnswer}>
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
