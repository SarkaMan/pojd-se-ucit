export const Tasks = ({ text }) => {
  return (
    <p className="font-bold text-lg relative block w-full rounded-lg bg-yellow-200 p-4 leading-5 text-black opacity-100 drop-shadow-lg my-5 px-10 md:px-10 text-left md:text-justify">
      {text}
    </p>
  );
};
