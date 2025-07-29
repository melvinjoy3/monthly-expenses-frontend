import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  width?: number;
  className?: string;
}

const Block = ({ children, className }: Props) => {
  return (
    <div
      className={`box-border shadow-lg p-6 w-full h-full
      rounded-lg bg-backgroundWhite border border-gray-100 ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default Block;
