import "./currencyCard.scss";
import dollar from "/currency-icons/Dollar Icon.svg";

export default function CurrencyCard() {
  return (
    <a href="#" className="currency-card">
      <div className="container">
        <div className="currency-card-wrapper">
          <div className="currency-card-image">
            {/* TODO: change alt tag from input data */}
            <img src={dollar} alt="currency card" />
          </div>
          <div className="currency-card-content">
            <p className="currency-card-name">Commercial Dollar</p>
            <p className="currency-card-price">R$ 5,13</p>
          </div>
        </div>
      </div>
    </a>
  );
}
