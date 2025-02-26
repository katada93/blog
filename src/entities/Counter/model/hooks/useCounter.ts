import {
  useAppDispatch,
  useAppSelector,
} from "app/providers/StoreProvider/config/hooks";
import { getCounterValue } from "../selectors/selectors";
import { counterActions } from "../slice/slice";

export const useCounter = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return {
    value,
    increment,
    decrement,
  };
};
