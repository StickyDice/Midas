import IAppButtonProps from "~/shared/ui/app-button/i-app-button-props";

export default function AppButton(props: IAppButtonProps) {
  const { className, leading, end, children } = props;
  return (
    <button className={className}>
      {leading}
      {children}
      {end}
    </button>
  );
}
