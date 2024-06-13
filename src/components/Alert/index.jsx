export const Alert = ({ text }) => {
  return (
    <div
      role="alert"
      className="rounded-xl border border-gray-600 ml-10 bg-yellow-50 p-3 mx-auto max-w-full sm:max-w-sm md:max-w-lg lg:max-w-xl mr-10 lg:ml-10 sm:mr-0 sm:ml-10 "
    >
      <div className="flex items-center justify-center text-center">
        <p className="text-base sm:text-base md:text-base lg:text-base text-gray-900">
          {text}
        </p>
      </div>
    </div>
  );
};
