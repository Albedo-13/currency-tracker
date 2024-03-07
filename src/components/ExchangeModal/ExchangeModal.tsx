import "./exchangeModal.scss";

type TProps = {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
};

export default function ExchangeModal({ showModal, setShowModal }: TProps) {
  return showModal ? (
    
    <div className="overlay" onClick={(e) => {
      if (e.target === e.currentTarget) {
        e.stopPropagation();
        setShowModal(false);
      }
    }}>
      <div className="modal">
        <span className="modal-close" onClick={() => setShowModal(false)}>&times;</span>
        <h2>Hello World</h2>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  ) : null;
}
