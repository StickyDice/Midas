import useClickOutside from "~/shared/hooks/use-click-outside";
import IAppDropdownProps from "~/shared/ui/app-dropdown/i-app-dropdown-props";

export default function AppDropdown(props: IAppDropdownProps) {
  const { title, children, iconComponent, className } = props;
  const [ref, visible, setVisible] = useClickOutside<HTMLDivElement>();

  const onDropHandler = () => {
    setVisible(!visible);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={onDropHandler}
        className={`flex items-center bg-transparent ${className}`}
      >
        {title}
        <div className={visible ? "rotate-180" : ""}>{iconComponent}</div>
      </button>
      {visible && (
        <div className="flex flex-col gap-2 absolute top-8 -left-6 w-max py-4 px-6 bg-black">
          {children.map((item) => item)}
        </div>
      )}
    </div>
  );
}
