import { createPortal } from "react-dom";

type TProps = {
  children: React.ReactNode;
  selector: HTMLElement;
}

export default function ModalPortal({ children, selector }: TProps) {
  return createPortal(
    children,
    selector
  );
}
