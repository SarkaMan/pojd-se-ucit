import React, { useState } from 'react';
import { useAnswer } from '../Exercise';

export const ExerciseThree = ({ children: correctAnswer, img }) => {
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
    <div>
      <img src={`/exercise/${img}`} />
      <input type="text" id="answer" value={answer} onChange={evaluateAnswer} />
    </div>
  );
};
