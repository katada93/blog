import { renderWithProviders } from "shared/lib/tests/renderWithProviders";
import { Counter } from "./Counter";
import { fireEvent, screen } from "@testing-library/dom";

describe("Counter", () => {
  test("should render", () => {
    renderWithProviders(<Counter />);

    expect(screen.getByTestId("value-title")).toBeInTheDocument();
  });

  test("render with state", () => {
    renderWithProviders(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
  });

  test("increment", () => {
    renderWithProviders(<Counter />, {
      initialState: { counter: { value: 10 } },
    });

    const incrementBtn = screen.getByTestId("increment-btn");
    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId("value-title")).toHaveTextContent("11");
  });

  test("decrement", () => {
    renderWithProviders(<Counter />, {
      initialState: { counter: { value: 10 } },
    });

    const incrementBtn = screen.getByTestId("decrement-btn");
    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId("value-title")).toHaveTextContent("9");
  });
});
