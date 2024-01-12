import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landyn from "../views/landyn/Landyn";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Control/" element={<Landyn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
