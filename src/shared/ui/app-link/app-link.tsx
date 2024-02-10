import { Link } from "react-router-dom";
import IAppLinkProps from "~/shared/ui/app-link/i-app-link-props";

function AppLink(props: IAppLinkProps) {
  const { navigateTo, className, children, end, leading } = props;
  return (
    <Link className={className} to={navigateTo}>
      {leading}
      {children}
      {end}
    </Link>
  );
}

export default AppLink;
