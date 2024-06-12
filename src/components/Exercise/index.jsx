import { useState, createContext, useContext, useEffect } from 'react';

const AnswersContext = createContext(() => {});
export const useAnswer = (key) => {
  const setAnswer = useContext(AnswersContext);

  useEffect(() => setAnswer(key, null), []);
  return (value) => setAnswer(key, value);
};

export const Exercise = ({ children }) => {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const setAnswer = (key, answer) => {
    setAnswers((oldAnswers) => ({ ...oldAnswers, [key]: answer }));
    if (answer === null) {
      setShowResult(false);
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    setShowResult(true);
  };

  let disabled = false;
  let answerCount = 0;
  let correctAnswers = 0;

  Object.entries(answers).forEach(([key, value]) => {
    console.log(key, value);
    answerCount += 1;
    if (value) {
      correctAnswers += 1;
    }
    if (value === null) {
      disabled = true;
    }
  });

  console.log(disabled);
  return (
    <>
      <AnswersContext.Provider value={setAnswer}>
        {children}
      </AnswersContext.Provider>
      <div>
        <button
          className="inline-block rounded border border-gray-200 bg-green-600 px-12 py-3 font-medium text-white enabled:hover:bg-transparent enabled:hover:text-green-600 focus:outline-none focus:ring text-base mx-5 my-5 disabled:bg-gray-200"
          disabled={disabled}
          onClick={handleClick}
        >
          Vyhodnotit
        </button>
        {showResult && (
          <span className="block sm:inline-block sm:ml-2 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-green-600 mt-2 sm:mt-0">
            Správné odpovědi: {correctAnswers}/{answerCount}
          </span>
        )}
      </div>
    </>
  );
};
