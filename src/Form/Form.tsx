export const Form = (): JSX.Element => {
  return (
    <>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Introduce your email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Introduce your password" />
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input type="file" placeholder="Introduce an image" />
      </div>
      <button></button>
    </>
  );
};
