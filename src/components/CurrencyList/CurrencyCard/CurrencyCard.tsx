import "./currencyCard.scss";
import { currenciesIcons } from "../../../constants/constants";
import { formatCurrency } from "../../../utils/currencyFormatter";
import type { TCurrency } from "../../../types/types";

type TProps = {
  currency: TCurrency;
  exchangeValue: number;
};

export default function CurrencyCard({ currency, exchangeValue }: TProps) {
  return (
    <section className="currency-card">
      {/* TODO: change tag to button */}
      <div className="container">
        <div className="currency-card-wrapper">
          <div className="currency-card-image">
            <img src={currenciesIcons[currency.code as keyof typeof currenciesIcons]} alt={`${currency.name}`} />
          </div>
          <div className="currency-card-content">
            <p className="currency-card-name">{currency.name}</p>
            <p className="currency-card-price">
              {formatCurrency(exchangeValue, currency.code, currency.decimal_digits)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
