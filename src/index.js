import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Main from "./pages/Main";

const rootNode = document.getElementById("root");

ReactDOM.createRoot(rootNode).render(
  <>
    <GlobalStyle>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </GlobalStyle>
  </>
);
