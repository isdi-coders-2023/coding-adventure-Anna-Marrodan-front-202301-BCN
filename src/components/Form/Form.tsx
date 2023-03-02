import { useState } from "react";
import Button from "../Button/Button";
import { FormStyled } from "./FormStyled";

interface FormProps {
  submitForm: () => void;
}

export const Form = ({ submitForm }: FormProps): JSX.Element => {
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
  });

  const handleRegisterDataChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  const [image, setImage] = useState("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.value);
  };

  const isDisabled =
    registerData.email === "" || registerData.password === "" || image === "";

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
          onChange={handleRegisterDataChange}
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
          onChange={handleRegisterDataChange}
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
      <Button isDisabled={isDisabled} text="Sign up" />
      <span className="form__required-text form__required-text--hidden" hidden>
        Sorry, something went wrong
      </span>
    </FormStyled>
  );
};
