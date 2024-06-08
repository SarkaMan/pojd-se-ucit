import React, { useState } from 'react';

const correctAnswer = [
  {
    answer: 'encompasses',
  },
  {
    answer: 'lung',
  },
];

export const ExerciseOne = () => {
  const [answer, setAnswer] = useState('');

  const evaluateAnswer = (event) => {
    event.preventDefault();
    const isCorrect = correctAnswer.find((item) => item.answer === answer);
    if (isCorrect) {
      console.log('Správná odpověď');
    } else {
      console.log('Špatná odpověď');
    }
  };

  return (
    <form onSubmit={evaluateAnswer}>
      <label>
        1. to include different types of things
        <select value={answer} onChange={(e) => setAnswer(e.target.value)}>
          <AnswerOption options={options} />
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

const options = [
  { word: 'encompasses' },
  { word: 'on foot' },
  { word: 'biennial' },
  { word: 'silence' },
  { word: 'primarily' },
  { word: 'landmark' },
  { word: 'staple' },
  { word: 'lung' },
  { word: 'paved' },
  { word: 'throughout' },
];

export const AnswerOption = ({ options }) => {
  return (
    <>
      <option value=""></option>
      {options.map((option, index) => (
        <option key={index} value={option.word}>
          {option.word}
        </option>
      ))}
    </>
  );
};
