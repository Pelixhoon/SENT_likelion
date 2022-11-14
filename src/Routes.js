import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Main from "./pages/Main";

export default function Router() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
