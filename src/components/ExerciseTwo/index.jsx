import React, { useState } from 'react';
import { useAnswer } from '../Exercise';

const definitions = [
  {
    expression: 'encompasses',
    definition: 'encompasse: to include different types of things',
  },
  {
    expression: 'lung',
    definition:
      'lung: either of the two organs in the chest with which people and some animals breathe',
  },
  {
    expression: 'staple',
    definition:
      'staple: a main product or part of something/a short, thin piece of wire used to fasten sheets of paper together',
  },
  { expression: 'on foot', definition: 'on foot: by walking' },
  {
    expression: 'primarily',
    definition: 'primarily: essentially, mostly, chiefly, principally',
  },
  {
    expression: 'landmarks',
    definition:
      'landmark: a building or place that is easily recognized, especially one that you can use to judge where you are',
  },
  {
    expression: 'throughout',
    definition: 'throughout: in every part, or during the whole period of time',
  },
  {
    expression: 'paved',
    definition:
      'paved: to cover an area of ground or a road with materials such as stone, concrete, or bricks that will form a hard, level surface',
  },
  {
    expression: 'biennials',
    definition: 'biennial: happening once every two years',
  },
  {
    expression: 'silence',
    definition: 'silence: a period without any sound',
  },
];

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
    <input type="text" id="answer" value={answer} onChange={evaluateAnswer} />
  );
};
