import React from "react";

const SignIn = (props) => {
  const { nameInput, passwordInput, setNameInput, setPasswordInput } =
    props;
  const onSignIn = (event) => {
    event.preventDefault();

    fetch("http://localhost:8080/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: nameInput,
        password: passwordInput,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(setNameInput(""))
      .then(setPasswordInput(""));
  };

  return (
    <form onSubmit={onSignIn}>
      <label htmlFor="nameInput">Username</label>
      <input
        id="nameInput"
        type="text"
        placeholder="username"
        onChange={(e) => {
          setNameInput(e.target.value);
        }}
      />
      <label htmlFor="passwordInput">Password</label>
      <input
        id="passwordInput"
        type="password"
        onChange={(e) => {
          setPasswordInput(e.target.value);
        }}
      />
      <input type="submit" value="Sign in" />
    </form>
  );
};

export default SignIn;
