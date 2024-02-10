import { ReactNode } from "react";

export default interface IAppLinkProps {
  leading?: ReactNode;
  end?: ReactNode;
  navigateTo: string;
  className?: string;
  children: ReactNode[] | ReactNode;
}
