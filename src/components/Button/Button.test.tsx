import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it is rendered with the text 'Sign up'", () => {
    test("Then it should show a button", () => {
      const expectedText = "Sign up";

      render(<Button text={expectedText} />);

      const button = screen.getByRole("button", { name: expectedText });
      expect(button).toBeInTheDocument();
    });
  });
});
