import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyleWrapper = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body, button, form, h1, h2, h3, h4, h5, h6, p, input, legend, li, ol, ul, select, table, td, textarea, th {
    margin:0;
    padding:0;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background:none;
    border:0;
    cursor:pointer;
    &:disabled {
      cursor: default;
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  *:focus {
    outline: none;
  }

  html {
    font-size: 62.5%;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    background-color: #fffbf2;
  }

  @media screen and (max-width: 415px) {
    html {
      font-size: 9.375px;
    }
  }

  @media screen and (max-width: 413px) {
    html {
      font-size: 8.75px;
    }
  }

  @media screen and (max-width: 361px) {
    html {
      font-size: 8.125px;
    }
  }

  @media screen and (max-width: 321px) {
    html {
      font-size: 7.5px;
    }
  }
`;

const Container = styled.div`
  position: relative;
  @media (min-width: 450px) {
    background-color: #f0f0f050;
  }
`;

const Body = styled.div`
  max-width: 450px;
  margin: 0 auto;
  font-family: "Noto Sans KR", sans-serif;
  background-color: #191919;
  @media (min-width: 450px) {
    min-height: 100vh;
  }
`;

const GlobalStyle = ({ children }) => {
  return (
    <>
      <GlobalStyleWrapper />
      <Container>
        <Body>{children}</Body>
      </Container>
    </>
  );
};

export default GlobalStyle;
