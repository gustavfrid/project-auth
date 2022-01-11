import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import SignedIn from "./components/SignedIn";
import StartPage from "./components/StartPage";
import NotFound from "./components/NotFound";

export const App = () => {
  const [nameInput, setNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        {/* {loading && <Loading />} */}
        <Route path="/" element={<StartPage />} />
        <Route
          path="/signup"
          element={
            <SignUp
              nameInput={nameInput}
              passwordInput={passwordInput}
              setNameInput={setNameInput}
              setPasswordInput={setPasswordInput}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <SignIn
              nameInput={nameInput}
              passwordInput={passwordInput}
              setNameInput={setNameInput}
              setPasswordInput={setPasswordInput}
            />
          }
        />
        <Route path="/signedin" element={<SignedIn />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
