import "./currencyGroup.scss";

type TProps = {
  group: string;
};

export default function CurrencyGroup({ group }: TProps) {
  return (
    <div className="currency-group">
      <h2 className="currency-group-title">{group}</h2>
      <hr className="currency-group-separator" />
    </div>
  );
}
