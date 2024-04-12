import { modalRoot } from "@constants/constants";
import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

export default function ModalPortal({ children }: PropsWithChildren) {
  return createPortal(
    children,
    modalRoot as HTMLElement
  );
}
