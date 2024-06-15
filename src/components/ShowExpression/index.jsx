export const ShowExpression = ({ expression, onClose }) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div
        role="alert"
        className="bg-yellow-50 max-w-md w-full mx-4 md:mx-0 rounded-xl border border-gray-600 p-6 shadow-lg"
      >
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <strong className="block font-medium text-gray-900">
              {expression}
            </strong>
          </div>
          <button
            className="text-gray-500 transition hover:text-gray-600"
            onClick={onClose}
          >
            <span className="sr-only">Dismiss popup</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
