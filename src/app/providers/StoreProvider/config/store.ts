import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "entities/Counter/model/slice/slice";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
