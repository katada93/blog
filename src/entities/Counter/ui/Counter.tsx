import { Button } from "shared/ui";
import { useCounter } from "../model/hooks/useCounter";

export const Counter = () => {
  const { decrement, increment, value } = useCounter();

  return (
    <div>
      <h1 data-testid="value-title">{value}</h1>
      <Button onClick={increment} data-testid="increment-btn">
        increment
      </Button>
      <Button data-testid="decrement-btn" onClick={decrement}>
        decrement
      </Button>
    </div>
  );
};
