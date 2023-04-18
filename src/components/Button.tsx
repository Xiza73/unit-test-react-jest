export interface ButtonProps {
  type: "button" | "submit" | "reset";
  color: "primary" | "secondary";
  text: string;
  onClick: () => void;
}

const colorOptions = {
  primary: "bg-blue-500 hover:bg-blue-700 text-white",
  secondary: "bg-gray-500 hover:bg-gray-700 text-white",
};

export const Button = ({ type, color, text, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`text-white font-bold py-2 px-4 rounded ${colorOptions[color]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
