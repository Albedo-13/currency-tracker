import { describe, expect, it } from "vitest";

import { XOHLCType } from "@/types";
import { dateAdapter, randomBar, randomNumber, zeroPrefix } from "@/utils/chartAdapter";

describe("randomNumber", () => {
  it("should generate a random number within the specified range", () => {
    const min = 1;
    const max = 10;
    const result = randomNumber(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });
});

describe("randomBar", () => {
  it("should generate a random bar object with the correct properties", () => {
    const target = {};
    const index = 1;
    const date = new Date();
    const lastClose = 100;
    const result = randomBar(target, index, date, lastClose);
    expect(result).toHaveProperty("x", date.valueOf());
    expect(result).toHaveProperty("o");
    expect(result).toHaveProperty("h");
    expect(result).toHaveProperty("l");
    expect(result).toHaveProperty("c");
  });

  it("should update the target object with the generated bar", () => {
    const target: XOHLCType[] = [];
    const index = 1;
    const date = new Date();
    const lastClose = 100;
    randomBar(target, index, date, lastClose);
    expect(target[index]).toBeDefined();
  });
});

describe("zeroPrefix", () => {
  it("should prepend a zero to single-digit numbers", () => {
    expect(zeroPrefix(5)).toBe("05");
    expect(zeroPrefix(9)).toBe("09");
  });

  it("should not modify numbers with two or more digits", () => {
    expect(zeroPrefix(10)).toBe("10");
    expect(zeroPrefix(99)).toBe("99");
  });
});

describe("dateAdapter", () => {
  it("should format the date in the expected format", () => {
    const date = new Date("2022-03-15");
    const result = dateAdapter(date);
    expect(result).toBe("2022-03-15");
  });

  it("should accept string dates in ISO 8601 format", () => {
    const dateString = "2022-03-15";
    const result = dateAdapter(dateString);
    expect(result).toBe("2022-03-15");
  });

  it("should accept date timestamps", () => {
    const timestamp = 1647350400000; // March 15, 2022
    const result = dateAdapter(timestamp);
    expect(result).toBe("2022-03-15");
  });
});
