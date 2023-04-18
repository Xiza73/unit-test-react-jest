import { useState } from "react";

export interface DangerTooltipProps {
  message: string;
}

export const DangerTooltip = ({ message }: DangerTooltipProps) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`absolute z-10 bottom-2 right-2 ml-3 p-3 w-56 bg-red-700 rounded-md items-center justify-center ${
        show ? "flex" : "hidden"
      }`}
    >
      <div className="flex-shrink-0">
        <svg
          className="h-5 w-5 text-gray-300"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 110-12 6 6 0 010 12zm-1-5a1 1 0 112 0v2a1 1 0 11-2 0v-2zm1-4a1 1 0 100-2 1 1 0 000 2z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="ml-3 w-0 flex-1 pt-0.5">
        <p className="text-sm leading-5 font-medium text-gray-300">{message}</p>
      </div>
      <div className="ml-4 flex-shrink-0 flex mb-auto">
        <button
          className="inline-flex text-gray-300 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150"
          aria-label="Dismiss"
        >
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
