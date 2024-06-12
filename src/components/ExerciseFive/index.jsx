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
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-gray-400 focus-within:ring-1 focus-within:ring-gray-400">
        <textarea
          className="w-full resize-none border-none align-top focus:ring-0 sm:text-sm rounded-md border-gray-300 pe-10 shadow-sm text-gray-900 focus:border-gray-400 focus:ring-gray-400"
          rows="4"
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
        >
          {' '}
        </textarea>
      </div>
      <div className="flex gap-4 pb-20 mt-5">
        <button
          className="inline-block rounded border border-gray-200 bg-green-600 px-12 py-3 font-medium text-white enabled:hover:bg-transparent enabled:hover:text-green-600 focus:outline-none focus:ring text-base mx-5 my-5 disabled:bg-gray-200"
          onClick={evaluateAnswer}
        >
          Vyhodnotit
        </button>
        {alert ? <Alert text={alert} /> : null}
      </div>
    </>
  );
};
