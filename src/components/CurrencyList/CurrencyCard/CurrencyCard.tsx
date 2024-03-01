import "./currencyCard.scss";
import dollar from "/currency-icons/Dollar Icon.svg";

export default function CurrencyCard() {
  return (
    <section className="currency-card">
      <div className="container">
        <div className="currency-card-wrapper">
          <div className="currency-card-image">
            {/* TODO: change alt tag from input data */}
            <img src={dollar} alt="currency card image" />
          </div>
        </div>
      </div>
    </section>
  );
}
