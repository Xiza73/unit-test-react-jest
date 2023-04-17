import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../../components/CounterApp";

describe("Tests in <CounterApp />", () => {
  const initialValue = 10;

  test("should match the snapshot", () => {
    const { container } = render(<CounterApp />);

    expect(container).toMatchSnapshot();
  });

  test("should show the initial value of 100", () => {
    render(<CounterApp value={100} />);

    expect(screen.getByText(100)).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toBe("100");
  });

  test("should increment the counter by 1 when the button +1 is clicked", () => {
    render(<CounterApp value={initialValue} />);

    const buttonAdd = screen.getByRole("button", { name: new RegExp("\\+") });
    fireEvent.click(buttonAdd);
    // buttonAdd.click(); does not work

    expect(screen.getByText(initialValue + 1)).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toBe(
      `${initialValue + 1}`
    );
  });

  test("should decrement the counter by 1 when the button -1 is clicked", () => {
    render(<CounterApp value={initialValue} />);

    const buttonSubtract = screen.getByRole("button", { name: new RegExp("-") });
    fireEvent.click(buttonSubtract);

    expect(screen.getByText(initialValue - 1)).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toBe(
      `${initialValue - 1}`
    );
  });

  test("should work the reset button", () => {
    render(<CounterApp value={initialValue} />);

    const buttonAdd = screen.getByRole("button", { name: new RegExp("\\+") });
    const buttonReset = screen.getByRole("button", { name: "Reset" });
    fireEvent.click(buttonAdd);
    fireEvent.click(buttonAdd);
    fireEvent.click(buttonReset);

    expect(screen.getByText(initialValue)).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toBe(
      `${initialValue}`
    );
  });
});
