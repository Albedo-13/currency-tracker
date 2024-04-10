export function randomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function randomBar(target: Record<number, unknown>, index: number, date: Date, lastClose: number) {
  const open = +randomNumber(lastClose * 0.95, lastClose * 1.05).toFixed(2);
  const close = +randomNumber(open * 0.95, open * 1.05).toFixed(2);
  const high = +randomNumber(Math.max(open, close), Math.max(open, close) * 1.1).toFixed(2);
  const low = +randomNumber(Math.min(open, close) * 0.9, Math.min(open, close)).toFixed(2);

  if (!target[index]) {
    target[index] = {};
  }

  return {
    x: date.valueOf(),
    o: open,
    h: high,
    l: low,
    c: close,
  };
}

export const zeroPrefix = (value: number) => (value < 10 ? `0${value}` : `${value}`);

export function dateAdapter(value: number | string | Date) {
  const date = new Date(value);
  return `${zeroPrefix(date.getFullYear())}-${zeroPrefix(date.getMonth() + 1)}-${zeroPrefix(date.getDate())}`;
}
