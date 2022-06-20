import React from "react";
import { Home } from "./Pages/Home";
import { Index } from "./Pages/Index";
import { NotFound } from "./Pages/NotFound";
import { Routes, Route } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="*" element={<NotFound />} />nncnbn
      </Routes>
    </div>
  );
};
