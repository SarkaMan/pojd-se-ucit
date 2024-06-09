import React, { useState } from 'react';
import { useAnswer } from '../Exercise';

export const ExerciseFour = ({ children: correctAnswer, id }) => {
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
      <iframe
        className="mx-auto my-5"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <label>
        <span className="sr-only">Answer</span>
        <input
          className="mt-10 w-fit rounded-md border-gray-200 pe-10 shadow-sm sm:text-sm"
          type="text"
          value={answer}
          onChange={evaluateAnswer}
        />
      </label>
    </div>
  );
};
