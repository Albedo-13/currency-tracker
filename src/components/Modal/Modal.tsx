import "./modal.scss";

import { PropsWithChildren, ReactNode, SyntheticEvent, useEffect } from "react";

type ModalProps = {
  onClose: VoidFunction;
  children: PropsWithChildren<ReactNode>;
};

export default function Modal({ onClose, children }: ModalProps) {
  const handleCloseClick = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const handleEscapeClick = (e: KeyboardEvent) => {
    if ((e as KeyboardEvent).key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", handleEscapeClick);
    return () => {
      document.body.removeEventListener("keydown", handleEscapeClick);
    };
  });

  return (
    <aside aria-modal="true" className="overlay" onMouseDown={handleCloseClick}>
      <div className="modal" data-testid="modal">
        <span className="modal__close" onClick={handleCloseClick} tabIndex={0} data-testid="modal-close">
          &times;
        </span>
        {children}
      </div>
    </aside>
  );
}
