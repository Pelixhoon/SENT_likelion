import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import MySent from "./pages/MySent";
import PostSent from "./pages/PostSent";
import MySentList from "./pages/MySentList";
import WriteSent from "./pages/WriteSent";

const rootNode = document.getElementById("root");

ReactDOM.createRoot(rootNode).render(
  <>
    <GlobalStyle>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mysent" element={<MySent />} />
          <Route path="/mysentlist/:pk" element={<MySentList />} />
          <Route path="/postsent" element={<PostSent />} />
          <Route path="/writesent" element={<WriteSent />} />
        </Routes>
      </BrowserRouter>
    </GlobalStyle>
  </>
);
