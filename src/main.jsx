import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import Project from "./pages/Project";
import ProjectDetail from "./pages/ProjectDetail";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
);
