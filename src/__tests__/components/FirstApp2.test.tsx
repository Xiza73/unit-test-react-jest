import { render, screen } from "@testing-library/react";
import { FirstApp } from "../../components/FirstApp";

describe("Tests in <FirstApp />", () => {
  const title = "Hello World";
  const subtitle = "This is a subtitle";
  const name = "Manuel";

  test("should match the snapshot", () => {
    const { container } = render(
      <FirstApp title={title} subtitle={subtitle} name={name} />
    );

    expect(container).toMatchSnapshot();
  });

  test("should show the message 'Hello World'", () => {
    render(<FirstApp title={title} subtitle={subtitle} name={name} />);
    // screen.debug();
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("should show the title in a h1 tag", () => {
    render(<FirstApp title={title} subtitle={subtitle} name={name} />);

    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("should show the subtitle sent by props", () => {
    render(<FirstApp title={title} subtitle={subtitle} name={name} />);

    expect(screen.getByText(subtitle)).toBeTruthy();

    // if there are more than one element: getAllByText
    // expect(screen.getAllByText(subtitle).length).toBe(2);
  });
});
