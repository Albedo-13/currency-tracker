import "./currencyCard.scss";
import { currenciesIcons } from "../../../constants/constants";

export default function CurrencyCard({ currency, exchangeValue }: any) {
  console.log(currency);
  return (
    <section className="currency-card">
      {/* TODO: change tag to button */}
      <div className="container">
        <div className="currency-card-wrapper">
          <div className="currency-card-image">
            {/* TODO: change alt tag from input data */}
            <img src={currenciesIcons[currency.code as keyof typeof currenciesIcons]} alt="currency card" />
          </div>
          <div className="currency-card-content">
            <p className="currency-card-name">{currency.name}</p>
            <p className="currency-card-price">
              {exchangeValue?.toLocaleString("en-US", {
                style: "currency",
                currency: currency.code,
                minFractionDigits: currency.decimal_digits,
                maxFractionDigits: currency.decimal_digits,
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
