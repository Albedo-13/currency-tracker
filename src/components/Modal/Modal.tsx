import "./modal.scss";

import { PropsWithChildren, ReactNode, SyntheticEvent, useEffect } from "react";

type ModalProps = {
  onClose: () => void;
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
      <div className="modal">
        <span className="modal-close" onMouseDown={handleCloseClick} tabIndex={0}>
          &times;
        </span>
        {children}
      </div>
    </aside>
  );
}
