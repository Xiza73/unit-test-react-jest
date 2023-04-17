import { render } from "@testing-library/react";
import { FirstApp } from "../../components/FirstApp";

const title = "Hello World";
const subtitle = "This is a subtitle";
const name = "Manuel";

describe("Tests in <FirstApp />", () => {
  /* test("should match the snapshot", () => {
    // snapshot: is a file that contains the HTML code of the component

    const { container } = render(
      <FirstApp title={title} subtitle={subtitle} name={name} />
    );

    expect(container).toMatchSnapshot();
  });
 */
  test("should show the title in a h1 tag", () => {
    const { getByText, getByTestId } = render(
      <FirstApp title={title} subtitle={subtitle} name={name} />
    );

    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector("h1");
    // expect(h1.innerHTML).toContain(title);

    const h1 = getByTestId("test-title");
    expect(h1.innerHTML).toBe(title);
  });

  test("should show the subtitle sent by props", () => {
    const { getByText } = render(
      <FirstApp title={title} subtitle={subtitle} name={name} />
    );

    expect(getByText(subtitle)).toBeTruthy();
    // if there are more than one element: getAllByText
    // expect(getAllByText(subtitle).length).toBe(2);
  });
});
