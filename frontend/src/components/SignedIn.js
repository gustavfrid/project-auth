import React from "react";

const SignedIn = () => {
  return (
    <form>
      <label htmlFor="nameInput">Username</label>
      <input id="nameInput" type="text" placeholder="username" />
      <label htmlFor="passwordInput">Password</label>
      <input id="nameInput" type="password" />
      <input type="submit" value="Sign in" />
    </form>
  );
};

export default SignedIn;
