import { useState } from "react";
import Button from "../Button/Button";
import { FormStyled } from "./FormStyled";

interface FormProps {
  submitForm: () => void;
}

export const Form = ({ submitForm }: FormProps): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.value);
  };

  return (
    <FormStyled className="form" onSubmit={submitForm}>
      <div className="form__information">
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input
          className="form__input"
          type="email"
          placeholder="Introduce your email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          id="email"
          autoComplete="off"
        />
        <span
          className="form__required-text form__required-text--hidden"
          hidden
        >
          Email is required
        </span>
      </div>
      <div className="form__information">
        <label className="form__label" htmlFor="password">
          Password
        </label>
        <input
          className="form__input"
          type="password"
          placeholder="Introduce your password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          id="password"
          required
        />
        <span
          className="form__required-text form__required-text--hidden"
          hidden
        >
          Password is required
        </span>
      </div>
      <div className="form__information">
        <label className="form__label" htmlFor="image">
          Image
        </label>
        <input
          className="form__input form__input--file"
          type="file"
          placeholder="Introduce an image"
          id="image"
          name="image"
          value={image}
          onChange={handleImageChange}
        />
        <span
          className="form__required-text form__required-text--hidden"
          hidden
        >
          Image is required
        </span>
      </div>
      <Button text="Sign up" />
      <span className="form__required-text form__required-text--hidden" hidden>
        Sorry, something went wrong
      </span>
    </FormStyled>
  );
};
