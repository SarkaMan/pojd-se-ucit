import { useState } from 'react';
import { ShowExpression } from '../ShowExpression';

export const Expression = ({ children, expression, definitions }) => {
  const [showDefinition, setShowDefinition] = useState(null);

  const handleClick = () => {
    const definition = definitions[expression ?? children];
    setShowDefinition(definition ?? 'Definition not found.');
  };

  const handleClose = () => {
    setShowDefinition(null);
  };

  return (
    <span
      className="font-bold text-green-600 border-solid border-2 px-3 rounded-lg cursor-pointer"
      onClick={handleClick}
    >
      {children}
      {showDefinition && (
        <ShowExpression expression={showDefinition} onClose={handleClose} />
      )}
    </span>
  );
};
