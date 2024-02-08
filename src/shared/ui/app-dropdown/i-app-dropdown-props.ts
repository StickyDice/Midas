import { ReactNode } from "react";

export default interface IAppDropdownProps {
  title: string;
  children: React.ReactNode[];
  iconComponent: ReactNode;
  className?: string;
}
