import Button from "../Button/Button";

export const Form = (): JSX.Element => {
  return (
    <>
      <h2>Register for the event</h2>
      <form className="register-form">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Introduce your email" id="email" />
          <span className="form__required-text">Email is required</span>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Introduce your password"
            id="password"
          />
          <span className="form__required-text">Password is required</span>
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input type="file" placeholder="Introduce an image" id="image" />
          <span className="form__required-text">Image is required</span>
        </div>
        <Button text="Sign up" />
      </form>
    </>
  );
};
