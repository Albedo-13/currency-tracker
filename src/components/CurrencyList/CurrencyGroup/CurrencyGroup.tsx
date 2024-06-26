import "./currencyGroup.scss";

type CurrencyGroupProps = {
  group: string;
};

export default function CurrencyGroup({ group }: CurrencyGroupProps) {
  return (
    <div className="currency-group">
      <h2 className="currency-group__title">{group}</h2>
      <hr className="currency-group__separator" />
    </div>
  );
}
