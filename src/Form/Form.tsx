export const Form = (): JSX.Element => {
  return (
    <>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="Introduce your email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" placeholder="Introduce your password" />
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input type="text" placeholder="Introduce an image" />
      </div>
      <button></button>
    </>
  );
};
