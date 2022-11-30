import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Main() {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <MainWrapper onClick={navigateToLogin}>
      <img src="/images/logo.png" alt="logo" />
      <TitleParagrpah>SENT</TitleParagrpah>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 800px;
`;

const TitleParagrpah = styled.p`
  color: white;
  font-weight: 800;
  font-size: 7rem;
  font: san-serif;
  padding: 5rem;
`;
