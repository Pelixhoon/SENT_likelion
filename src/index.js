import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/GlobalStyle";
import Theme from "./styles/Theme";
import { ThemeProvider } from "styled-components";

import Routes from "./Routes";

const rootNode = document.getElementById("root");

ReactDOM.createRoot(rootNode).render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={Theme}>
      <Routes />
    </ThemeProvider>
  </>
);
