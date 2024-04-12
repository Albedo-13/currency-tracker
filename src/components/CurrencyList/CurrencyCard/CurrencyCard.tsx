import type { CurrencyType } from "@types";
import { formatCurrency } from "@utils/currencyFormatter";
import "./currencyCard.scss";

type CurrencyCardProps = {
  currency: CurrencyType;
  exchangeValue: number;
  onClick: () => void;
};

export default function CurrencyCard({ currency, exchangeValue, onClick }: CurrencyCardProps) {
  return (
    <button className="currency-card" onClick={onClick}>
      <div className="container">
        <div className="currency-card-wrapper">
          <div className="currency-card-image">
            <img src={currency.thumb} alt={`${currency.name}`} />
          </div>
          <div className="currency-card-content">
            <p className="currency-card-name">{currency.name}</p>
            <p className="currency-card-price">
              1 USD = {formatCurrency(exchangeValue, currency.code, currency.decimal_digits)}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}
