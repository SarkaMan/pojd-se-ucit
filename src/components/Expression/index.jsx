export const Expression = ({ children, expression, definitions }) => {
  const handleClick = () => {
    const definition = definitions[expression ?? children];

    if (definition) {
      alert(definition);
    } else {
      alert('Definition not found.');
    }
  };

  return (
    <span className="font-bold" onClick={handleClick}>
      {children}
    </span>
  );
};
