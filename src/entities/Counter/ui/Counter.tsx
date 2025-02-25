import {
  useAppDispatch,
  useAppSelector,
} from "app/providers/StoreProvider/config/hooks";
import { getCounterValue } from "../model/selectors/selectors";
import { Button } from "shared/ui";
import { counterActions } from "../model/slice/slice";

export const Counter = () => {
  const dispatch = useAppDispatch();
  const counterValue = useAppSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button onClick={increment} data-testid="increment-btn">
        increment
      </Button>
      <Button data-testid="decrement-btn" onClick={decrement}>
        decrement
      </Button>
    </div>
  );
};
