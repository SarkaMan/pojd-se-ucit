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
  return (
    <>
      <AnswersContext.Provider value={setAnswer}>
        {children}
      </AnswersContext.Provider>
      <div>
        <button disabled={disabled} onClick={handleClick}>
          Vyhodnotit
        </button>
        {showResult && (
          <span>
            Správné odpovědi: {correctAnswers}/{answerCount}
          </span>
        )}
      </div>
    </>
  );
};
