import CurrencyGroup from "./CurrencyGroup/CurrencyGroup";
import CurrencyCard from "./CurrencyCard/CurrencyCard";
import "./currencyList.scss";

export default function CurrencyList() {
  return (
    <section className="currency">
      <div className="container">
        <div className="currency-wrapper">
          {/* TODO: merge currencyGroup & div with props.children */}
          <CurrencyGroup group={"Stocks"} />
          <div className="currency-cards-list">
            <CurrencyCard />
            <CurrencyCard />
          </div>

          <CurrencyGroup group={"Quotes"} />
          <section className="currency-cards-list">
            <CurrencyCard />
            <CurrencyCard />
            <CurrencyCard />
            <CurrencyCard />
            <CurrencyCard />
          </section>
        </div>
      </div>
    </section>
  );
}
