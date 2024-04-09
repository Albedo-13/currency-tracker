import { createPortal } from "react-dom";
import { modalRoot } from "../../constants/constants";

type TProps = {
  children: React.ReactNode;
}

export default function ModalPortal({ children }: TProps) {
  return createPortal(
    children,
    modalRoot as HTMLElement
  );
}
