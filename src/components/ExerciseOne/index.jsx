import React, { useState } from 'react';
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
    expression: 'Throughout',
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

export const ExerciseOne = ({ children: correctAnswer }) => {
  const [answer, setAnswer] = useState('');

  const evaluateAnswer = (event) => {
    event.preventDefault();

    const answer = event.target.value;
    setAnswer(answer);
    const isCorrect = correctAnswer === answer;
    if (isCorrect) {
      console.log('Správná odpověď');
    } else {
      console.log('Špatná odpověď');
    }
  };
  return (
    <>
      <select value={answer} onChange={evaluateAnswer}>
        <option value=""></option>
        {definitions.map((option, index) => (
          <option key={index} value={option.expression}>
            {option.expression}
          </option>
        ))}
      </select>
    </>
  );
};
