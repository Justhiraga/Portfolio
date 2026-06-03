import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes , Route } from "react-router";
import "./index.css";
import Home from "./pages/Home.jsx";
import Error404 from "./pages/Error404.jsx";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<Error404 />} />
  </Routes>
  </BrowserRouter>,
);
