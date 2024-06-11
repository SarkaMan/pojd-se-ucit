export const Alert = ({ text }) => {
  return (
    <div
      role="alert"
      className="rounded-xl border border-gray-600 bg-yellow-50 p-4 gap-4 mt-1"
    >
      <div className="flex items-center justify-center">
        <p className="text-lg text-gray-900">{text}</p>
      </div>
    </div>
  );
};
