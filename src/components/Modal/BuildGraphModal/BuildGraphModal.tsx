import { type ChangeEvent, useState } from "react";
import type { TXOHLC } from "../../../types/types";
import { dateAdapter } from "../../../utils/chartAdapter";

type TChartInputListProps = { onBuildClick: (inputs: TXOHLC[]) => void };

export default function ChartInputList({ onBuildClick }: TChartInputListProps) {
  const [inputsList, setInputsList] = useState<TXOHLC[]>([{}, {}, {}, {}]);

  const onChange = (index: number) => (someNewData: TXOHLC) => {
    const newInputsList = [...inputsList];
    newInputsList[index] = { ...newInputsList[index], ...someNewData };
    setInputsList(newInputsList);
  };

  const handleBuildClick = (inputsList: TXOHLC[]) => {
    onBuildClick(inputsList);
    inputsList.map((input) => {
      input.o = input.o ?? 0;
      input.h = input.h ?? 0;
      input.l = input.l ?? 0;
      input.c = input.c ?? 0;
    });
  };

  console.log("inputsList", inputsList);
  return (
    <>
      {inputsList.map((e, index) => (
        <ChartInputLine data={e} onChange={onChange(index)} index={index} key={index} />
      ))}
      <button
        onClick={() => {
          handleBuildClick(inputsList);
          console.log("click");
        }}
      >
        Build
      </button>
    </>
  );
}

type TChartInputLineProps = {
  data: TXOHLC;
  onChange: (someNewData: TXOHLC) => void;
  index: number;
};

export const ChartInputLine = ({ data, onChange, index }: TChartInputLineProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange({ [e.target.name]: e.target.value });
  };

  return (
    <>
      <p>{dateAdapter(Date.now() - index * 24 * 60 * 60 * 1000)}</p>
      <ChartInputItem value="o" data={data} onInputChange={handleInputChange} />
      <ChartInputItem value="h" data={data} onInputChange={handleInputChange} />
      <ChartInputItem value="l" data={data} onInputChange={handleInputChange} />
      <ChartInputItem value="c" data={data} onInputChange={handleInputChange} />
    </>
  );
};

type TChartInputItemProps = {
  data: TXOHLC;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const ChartInputItem = ({ data, onInputChange, value }: TChartInputItemProps) => {
  return (
    <label>
      {value}:
      <input value={data[value as keyof TXOHLC] || ""} onChange={onInputChange} name={value} type="number" required />
    </label>
  );
};
