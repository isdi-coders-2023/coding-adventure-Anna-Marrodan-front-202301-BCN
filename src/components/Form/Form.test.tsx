import { render, screen } from "@testing-library/react";
import { Form } from "./Form";

export {};

describe("Given a Form component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Sign up'", () => {
      const expectedTest = /sign up/i;

      render(<Form submitForm={() => {}} />);
      const button = screen.getByRole("button", { name: expectedTest });

      expect(button).toBeInTheDocument();
    });
  });

  test("Then it should show a label with the title 'Email'", () => {
    const expectedTest = /email/i;

    render(<Form submitForm={() => {}} />);
    const label = screen.getByLabelText(expectedTest);

    expect(label).toBeInTheDocument();
  });

  test("Then it should show a label with the title 'Password'", () => {
    const expectedTest = /password/i;

    render(<Form submitForm={() => {}} />);
    const label = screen.getByLabelText(expectedTest);

    expect(label).toBeInTheDocument();
  });

  test("Then it should show a label with the title 'Image'", () => {
    const expectedTest = /image/i;

    render(<Form submitForm={() => {}} />);
    const label = screen.getByLabelText(expectedTest);

    expect(label).toBeInTheDocument();
  });
});
