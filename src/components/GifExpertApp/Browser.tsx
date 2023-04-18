import { ChangeEventHandler } from "react";

export interface BrowserProps {
  placeholder?: string;
  buttonText: string;
  onClick: () => void;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Browser = ({
  buttonText,
  onClick,
  placeholder,
  value,
  onChange,
}: BrowserProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center gap-3 mb-5">
      <input
        type="text"
        placeholder={placeholder}
        className="p-2 border-2 border-gray-300 rounded-md grow"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
};
