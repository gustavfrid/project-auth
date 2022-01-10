import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import StartPage from "./components/StartPage";
import NotFound from "./components/NotFound";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* {loading && <Loading />} */}
        <Route path="/" element={<StartPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
