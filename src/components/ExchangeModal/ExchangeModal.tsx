import { SyntheticEvent } from "react";
import "./exchangeModal.scss";

type TProps = {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
};

export default function ExchangeModal({ showModal, setShowModal }: TProps) {
  const handleCloseClick = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      e.stopPropagation();
      setShowModal(false);
    }
  };

  return (
    <div className="overlay" onClick={handleCloseClick}>
      <div className="modal">
        <span className="modal-close" onClick={() => setShowModal(false)}>
          &times;
        </span>
        <h2>Hello World</h2>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
}
