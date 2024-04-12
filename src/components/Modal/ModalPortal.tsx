import { createPortal } from "react-dom";
import { modalRoot } from "@constants/constants";

type ModalPortalProps = {
  children: React.ReactNode;
}

export default function ModalPortal({ children }: ModalPortalProps) {
  return createPortal(
    children,
    modalRoot as HTMLElement
  );
}
