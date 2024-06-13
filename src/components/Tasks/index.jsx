export const Tasks = ({ text }) => {
  return (
    <p className="font-regular text-lg relative block w-full rounded-lg bg-yellow-200 p-4 leading-5 text-black opacity-100 drop-shadow-lg my-5 px-5 md:px-20 text-left md:text-justify">
      {text}
    </p>
  );
};
