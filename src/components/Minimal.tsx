export interface SeparatorProps {
  className?: string;
}

export const Separator = ({ className }: SeparatorProps) => (
  <hr className={`w-full my-4 ${className}`} />
);
