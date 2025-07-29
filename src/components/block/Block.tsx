import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  width?: number;
}

const Block = ({ children }: Props) => {
  return (
    <div
      className="box-border shadow-md p-4 w-auto h-auto
      rounded-[5px] bg-backgroundWhite"
    >
      {children}
    </div>
  );
};

export default Block;
