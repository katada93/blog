import { RootState } from "app/providers/StoreProvider/config/store";
import { getCounter, getCounterValue } from "./selectors";

describe("getCounter", () => {
  test("should return counter", () => {
    const state: Partial<RootState> = {
      counter: { value: 10 },
    };
    expect(getCounter(state as RootState)).toEqual({ value: 10 });
  });

  test("should return counter value", () => {
    const state: Partial<RootState> = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state as RootState)).toBe(10);
  });
});
