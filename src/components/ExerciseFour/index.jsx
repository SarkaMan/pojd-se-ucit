import React, { useState } from 'react';
import { useAnswer } from '../Exercise';

export const ExerciseFour = ({ children: correctAnswer, id }) => {
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
    <>
      <div className="flex ml-10 mr-10">
        <iframe
          className="rounded mx-auto"
          width="560"
          height="380"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <label>
        <span className="sr-only">Answer</span>
        <input
          className="mt-10 w-fit rounded-md border-gray-300 pe-10 shadow-sm sm:text-sm text-gray-900 focus:border-gray-400 focus:ring-gray-400 ml-10 mr-10"
          type="text"
          value={answer}
          onChange={evaluateAnswer}
        />
      </label>{' '}
    </>
  );
};

// src={`https://www.youtube.com/embed/${id}`}
