import CurrencyGroup from "./CurrencyGroup/CurrencyGroup";
import CurrencyCard from "./CurrencyCard/CurrencyCard";
import "./currencyList.scss";

export default function CurrencyList() {
  return (
    <section className="currency">
      <div className="container">
        <div className="currency-wrapper">
          <CurrencyGroup group={"Stocks"} />
          <CurrencyCard />
          <CurrencyCard />
          
          <CurrencyGroup group={"Quotes"} />
          <CurrencyCard />
          <CurrencyCard />
          <CurrencyCard />
          <CurrencyCard />
          <CurrencyCard />
        </div>
      </div>
    </section>
  )
}
