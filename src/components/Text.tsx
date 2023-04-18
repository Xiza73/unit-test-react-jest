export interface TitleProps {
  text: string;
}

export const Title = ({ text }: TitleProps) => (
  <h1 className="text-4xl font-bold text-center text-gray-800">{text}</h1>
);
