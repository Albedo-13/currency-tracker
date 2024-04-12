import "./updateStatus.scss";

import { useExchangeRates } from "@/hooks/useExchangeRates";

export default function UpdateStatus() {
  const { dataUpdatedAt } = useExchangeRates();

  const lastFetchData = () => {
    if (!dataUpdatedAt) return ". . .";

    const lastFetchData = new Date(dataUpdatedAt);
    return lastFetchData.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  return (
    <section className="update-status">
      <div className="container">
        <div className="update-status-wrapper">
          <div className="update-status-lamp"></div>
          <h2 className="update-status-text">Last Updated at {lastFetchData()}</h2>
        </div>
      </div>
    </section>
  );
}
