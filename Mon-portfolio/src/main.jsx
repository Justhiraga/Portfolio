import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes , Route } from "react-router";
import "./index.css";
import Home from "./pages/Home.jsx";
import Error404 from "./pages/Error404.jsx";
import Project1 from "./pages/Project1.jsx";
import Project2 from "./pages/Project2.jsx";
import Project3 from "./pages/Project3.jsx";
import Project4 from "./pages/Project4.jsx";
import Project5 from "./pages/Project5.jsx";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<Error404 />} />
    <Route path="/Project-oh-my-food" element={<Project1 />} />
    <Route path="/Project-events724" element={<Project2 />} />
    <Route path="/Project-argentBank" element={<Project3 />} />
    <Route path="/Project-nina-carducci" element={<Project4 />} />
    <Route path="/Project-appreact" element={<Project5 />} />
  </Routes>
  </BrowserRouter>,
);
