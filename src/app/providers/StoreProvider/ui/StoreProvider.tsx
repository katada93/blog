import { ReactNode } from "react";
import { Provider } from "react-redux";
import { RootState, setupStore } from "../config/store";

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: Partial<RootState>;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props;

  const store = setupStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};
