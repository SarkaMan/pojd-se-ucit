export const LearningType = ({ name, item1, item2, item3, item4 }) => {
  return (
    <div className="w-full sm:w-1/2 px-2 rounded-lg overflow-hidden bg-white shadow-lg">
    <div className="p-4">
      <h1 className="text-xl font-medium mb-2"> {name} </h1>
      <p> {item1} </p>
      <p> {item2} </p>
      <p> {item3} </p>
      <p> {item4} </p>
      </div>
      </div>
    
  );
};
