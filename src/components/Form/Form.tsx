import Button from "../Button/Button";

interface FormProps {
  submitForm: () => void;
}

export const Form = ({ submitForm }: FormProps): JSX.Element => {
  return (
    <form className="form" onSubmit={submitForm}>
      <div>
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input
          className="form__input"
          type="email"
          placeholder="Introduce your email"
          id="email"
          required
        />
        <span
          className="form__required-text form__required-text--hidden"
          hidden
        >
          Email is required
        </span>
      </div>
      <div>
        <label className="form__label" htmlFor="password">
          Password
        </label>
        <input
          className="form__input"
          type="password"
          placeholder="Introduce your password"
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
      <div>
        <label className="form__label" htmlFor="image">
          Image
        </label>
        <input
          className="form__input form__input--file"
          type="file"
          placeholder="Introduce an image"
          id="image"
          required
        />
        <span
          className="form__required-text form__required-text--hidden"
          hidden
        >
          Image is required
        </span>
      </div>
      <Button text="Sign up" />
    </form>
  );
};
