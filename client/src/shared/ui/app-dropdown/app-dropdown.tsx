import { useState } from "react";
import IAppDropdownProps from "~/shared/ui/app-dropdown/i-app-dropdown-props";

export default function AppDropdown(props: IAppDropdownProps) {
  const { title, children, iconComponent, className } = props;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const onDropHandler = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={onDropHandler}
        className={`flex items-center bg-transparent ${className}`}
      >
        {title}
        <div className={isDropdownOpen ? "rotate-180" : ""}>
          {iconComponent}
        </div>
      </button>
      {isDropdownOpen && (
        <div className="flex flex-col gap-2 absolute top-8 -left-6 w-max py-4 px-6 bg-black">
          {children.map((item) => item)}
        </div>
      )}
    </div>
  );
}
