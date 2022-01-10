import React from "react";

const SignedIn = () => {
  const signout = () => {
    // signout
    console.log(signout);
  };
  return (
    <>
      <h1>You are signed in!</h1>
      <button onClick={() => signout()}></button>
    </>
  );
};

export default SignedIn;
