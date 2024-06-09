import React, { useState } from 'react';

export const ExerciseFive = ({ definitions }) => {
  const [answer, setAnswer] = useState('');

  const evaluateAnswer = (event) => {
    event.preventDefault();

    if (answer === '') {
      alert('Já věděla, že další textové pole už nerozdejcháš… ');
    } else {
      const wordList = Object.keys(definitions).filter((definition) =>
        answer.toLowerCase().includes(definition.toLowerCase()),
      );
      if (wordList.length <= 5) {
        alert('Už jsi měl i lepší chvíle.');
      } else {
        alert('Tak to jsme na tom zhruba stejně.');
      }
    }
  };
  return (
    <>
      <div>
        <textarea
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
        >
          {' '}
        </textarea>
      </div>
      <button onClick={evaluateAnswer}>Vyhodnotit</button>
    </>
  );
};
