import { useState } from 'react';
import { ShowExpression } from '../ShowExpression';

export const Expression = ({ children, expression, definitions }) => {
  const [ShowDefinition, setShowDefinition] = useState(null);
  const handleClick = () => {
    const definition = definitions[expression ?? children];

    if (definition) {
      setShowDefinition(definition);
    } else {
      setShowDefinition('Definition not found.');
    }
  };

  return (
    <span
      className="font-bold text-green-600 border-solid border-2 px-3 rounded-lg"
      onClick={handleClick}
    >
      {ShowDefinition ? <ShowExpression expression={ShowDefinition} /> : null}
      {children}
    </span>
  );
};
