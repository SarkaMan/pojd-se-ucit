export const Alert = ({ text }) => {
  return (
    <div
      role="alert"
      className="rounded-xl border border-gray-100 bg-white p-4"
    >
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <p className="mt-1 text-sm text-gray-700">{text}</p>
        </div>
      </div>
    </div>
  );
};
