import { RefObject, useEffect, useRef, useState } from "react";

export default function useClickOutside<A extends HTMLElement>(): [
  RefObject<A>,
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
] {
  const [visible, setVisible] = useState(false);
  const ref = useRef<A>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        event.target instanceof HTMLElement &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return [ref, visible, setVisible];
}
