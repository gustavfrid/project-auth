import React from "react";

const Signup = (props) => {
  const { nameInput, passwordInput, setNameInput, setPasswordInput } =
    props;
  const onSignUp = (event) => {
    event.preventDefault();

    fetch("http://localhost:8080/signup", {
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
    <form onSubmit={onSignUp}>
      <label htmlFor="nameInput">Type your username</label>
      <input
        id="nameInput"
        type="text"
        placeholder="username"
        onChange={(e) => {
          setNameInput(e.target.value);
        }}
      />
      <label htmlFor="passwordInput">Type your password</label>
      <input
        id="passwordInput"
        type="password"
        onChange={(e) => {
          setPasswordInput(e.target.value);
        }}
      />
      <input type="submit" value="Add user" />
    </form>
  );
};

export default Signup;
