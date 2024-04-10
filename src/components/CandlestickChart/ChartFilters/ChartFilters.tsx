import { useState, type ChangeEvent, type Dispatch, type SetStateAction } from "react";
import "./chartFilters.scss";
import { zeroPrefix } from "../../../utils/chartAdapter";

type TChartFiltersProps = { onFilterClick: (from: number, to: number) => void };

export default function ChartFilters({ onFilterClick }: TChartFiltersProps) {
  const [from, setFrom] = useState<number>(0);
  const [to, setTo] = useState<number>(0);

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>, setter: Dispatch<SetStateAction<number>>) => {
    const inputDate = new Date(e.target.value);
    const dateString = `${inputDate.getFullYear()}-${zeroPrefix(inputDate.getMonth() + 1)}-${zeroPrefix(
      inputDate.getDate()
    )}`;
    setter(Date.parse(dateString));
  };

  return (
    <section className="chart-filters">
      <label className="chart-filters-label">
        from:
        <input type="date" onChange={(e) => handleDateChange(e, setFrom)} className="chart-filters-date"/>
      </label>
      <label className="chart-filters-label">
        to:
        <input type="date" onChange={(e) => handleDateChange(e, setTo)} className="chart-filters-date" />
      </label>
      <button onClick={() => onFilterClick(from, to)} className="chart-button">Filter</button>
    </section>
  );
}
