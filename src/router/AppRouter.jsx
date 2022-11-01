import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Followers from "../components/Followers";
import Home from "../components/Home";
import LoginForm from "../components/LoginForm";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/followers" element={<Followers />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
