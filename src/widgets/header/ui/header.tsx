import MainNaviagation from "~/features/main-navigation/ui/main-navigation";
import AppLink from "~/shared/ui/app-link/app-link";
import CartIcon from "~/shared/ui/icons/cart-icon";
import LogoIcon from "~/shared/ui/icons/logo-icon";
import UserIcon from "~/shared/ui/icons/user-icons";
import SearchButton from "~/widgets/header/ui/search-button/search-button";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-12 py-13">
      <AppLink navigateTo="/">
        <LogoIcon className="w-40 h-7" />
      </AppLink>
      <MainNaviagation />
      <div className="flex gap-5">
        <SearchButton />
        <AppLink navigateTo="/">
          <UserIcon />
        </AppLink>
        <AppLink navigateTo="/">
          <CartIcon />
        </AppLink>
      </div>
    </div>
  );
}
