import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login-page/LoginPage";
import TrelloPage from "../pages/main-page/TrelloPage";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Trello" element={<TrelloPage/>}/>
    </Routes>
  );
};

export default AppRoute;
