import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from "./components/layout/AppHeader";
import App from "./pages/App";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
import "./styles/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppHeader />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projects/:name" element={<Project />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
