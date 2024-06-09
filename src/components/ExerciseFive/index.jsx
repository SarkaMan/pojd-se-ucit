import React, { useState } from 'react';
import { Alert } from '../Alert';

export const ExerciseFive = ({ definitions }) => {
  const [answer, setAnswer] = useState('');
  const [alert, setAlert] = useState(null);

  const evaluateAnswer = (event) => {
    event.preventDefault();

    if (answer === '') {
      setAlert('Já věděla, že další textové pole už nerozdejcháš… ');
    } else {
      const wordList = Object.keys(definitions).filter((definition) =>
        answer.toLowerCase().includes(definition.toLowerCase()),
      );
      if (wordList.length <= 5) {
        setAlert('Už jsi měl i lepší chvíle.');
      } else {
        setAlert('Tak to jsme na tom zhruba stejně.');
      }
    }
  };
  return (
    <>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
        <textarea
          className="w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
          rows="4"
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
        >
          {' '}
        </textarea>
      </div>
      <div className="flex gap-4">
        <button
          className="inline-block rounded border border-green-700 bg-green-700 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-green-700 focus:outline-none focus:ring active:text-indigo-500 text-base my-5 mx-5"
          onClick={evaluateAnswer}
        >
          Vyhodnotit
        </button>
        {alert ? <Alert text={alert} /> : null}
      </div>
    </>
  );
};
