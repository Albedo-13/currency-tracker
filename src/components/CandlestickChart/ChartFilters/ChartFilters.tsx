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
    <>
      <label>
        from:
        <input type="date" onChange={(e) => handleDateChange(e, setFrom)} />
      </label>
      <label>
        to:
        <input type="date" onChange={(e) => handleDateChange(e, setTo)} />
      </label>
      <button onClick={() => onFilterClick(from, to)}>Filter</button>
    </>
  );
}
