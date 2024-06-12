export const Alert = ({ text }) => {
  return (
    <div
      role="alert"
      className="rounded-xl border border-gray-600 bg-yellow-50 p-3 sm:p-6 md:p-8 lg:p-10 gap-4 mt-1 mx-auto max-w-full sm:max-w-sm md:max-w-lg lg:max-w-xl"
    >
      <div className="flex items-center justify-center text-center">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900">
          {text}
        </p>
      </div>
    </div>
  );
};
