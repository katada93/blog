import { counterActions, counterReducer } from "./slice";
import { CounterState } from "../types/types";

describe("Counter slice", () => {
  test("should decrement value", () => {
    const state: CounterState = { value: 10 };

    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 9,
    });
  });

  test("increment", () => {
    const state: CounterState = { value: 10 };

    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 11,
    });
  });

  test("should work with empty state", () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  });
});
