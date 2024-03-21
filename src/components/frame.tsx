import { ReactNode } from "react";

type FrameProps = {
  children: ReactNode;
};

export default function Frame({ children }: FrameProps): JSX.Element {
  return <div className="w-full h-full z-10">{children}</div>;
}
