import { ReactNode } from "react";

export default interface IAppButtonProps {
  className?: string;
  leading?: ReactNode;
  end?: ReactNode;
  children?: ReactNode[] | ReactNode;
}
