import React from "react";

const Signup = () => {
  return (
    <form>
      <label htmlFor="nameInput">Type your username</label>
      <input id="nameInput" type="text" placeholder="username" />
      <label htmlFor="passwordInput">Type your password</label>
      <input id="nameInput" type="password" />
      <input type="submit" value="Add user" />
    </form>
  );
};

export default Signup;
