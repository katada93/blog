import { fireEvent, screen } from "@testing-library/react";

import { renderWithProviders } from "shared/lib/tests/renderWithProviders";
import { Sidebar } from "./Sidebar";

describe("UI Sidebar component", () => {
  test("render Sidebar", () => {
    renderWithProviders(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  test("render Sidebar with default className", () => {
    renderWithProviders(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toHaveClass("Sidebar");
  });
  test("test Sidebar toggle collapsed", () => {
    renderWithProviders(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
