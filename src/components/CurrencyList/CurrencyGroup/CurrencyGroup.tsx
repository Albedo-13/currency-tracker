import "./currencyGroup.scss";

type TProps = {
  group: string;
};

export default function CurrencyGroup({ group }: TProps) {
  return (
  <div>
    {group}
  </div>
  );
}
