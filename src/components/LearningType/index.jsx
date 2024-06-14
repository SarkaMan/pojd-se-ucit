export const LearningType = ({ name, item1, item2, item3, item4 }) => {
  return (
    <div className="p-5 w-full min-w-[200px] rounded-lg overflow-hidden bg-white shadow-xl leading-normal">
      <h1 className="text-xl text-center font-medium mb-2"> {name} </h1>
      <p> {item1} </p>
      <p> {item2} </p>
      <p> {item3} </p>
      <p> {item4} </p>
    </div>
  );
};
