import AppDropdown from "~/shared/ui/app-dropdown/app-dropdown";
import AppLink from "~/shared/ui/app-link/app-link";
import DropdownArrowIcon from "~/shared/ui/icons/dropdown-arrow-icon";
import PromoIcon from "~/shared/ui/icons/promo";

export default function MainNaviagation() {
  return (
    <div className="flex items-center gap-8">
      <AppLink
        className="flex uppercase font-medium gap-1"
        navigateTo="/"
        end={<PromoIcon />}
      >
        Акции
      </AppLink>
      <AppDropdown
        className="uppercase font-medium gap-1"
        title="Горячее"
        iconComponent={<DropdownArrowIcon />}
      >
        <AppLink navigateTo="/">Горячие блюда</AppLink>
        <AppLink navigateTo="/">Супы</AppLink>
        <AppLink navigateTo="/">Хинкали</AppLink>
      </AppDropdown>
      <AppDropdown
        className="uppercase font-medium gap-1"
        title="Холодное"
        iconComponent={<DropdownArrowIcon />}
      >
        <AppLink navigateTo="/">Горячие блюда</AppLink>
        <AppLink navigateTo="/">Супы</AppLink>
        <AppLink navigateTo="/">Хинкали</AppLink>
      </AppDropdown>
      <AppLink navigateTo="/" className="uppercase font-medium gap-1">
        Свежая выпечка
      </AppLink>
      <AppLink navigateTo="/" className="uppercase font-medium gap-1">
        Десерты
      </AppLink>
      <AppLink className="uppercase font-medium gap-1" navigateTo="/">
        Напитки
      </AppLink>
    </div>
  );
}
