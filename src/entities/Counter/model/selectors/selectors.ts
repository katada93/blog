import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "app/providers/StoreProvider/config/store";

export const getCounter = (state: RootState) => state.counter;

export const getCounterValue = createSelector(
  getCounter,
  (counter) => counter.value
);
