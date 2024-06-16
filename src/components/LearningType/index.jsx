export const LearningType = ({ name, items }) => {
  return (
    <div className="p-5 w-full min-w-[200px] rounded-lg overflow-hidden bg-white shadow-xl leading-normal">
      <h1 className="text-xl text-center font-medium mb-2"> {name} </h1>
      {
        items.map((item, index) => {
          return (
            <p key={index}>
              <span className="font-bold">- {item.name}</span>
              {item.author && <span> od {item.author}</span>}
              {item.description && <span> - {item.description}</span>}
            </p>
          );
        })
      }
    </div>
  );
};

