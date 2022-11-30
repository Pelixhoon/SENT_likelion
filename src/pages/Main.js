import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export default function Main() {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <MainWrapper onClick={navigateToLogin}>
      <LogoImg src="/images/logo.png" alt="logo" />
      <TitleParagrpah>SENT</TitleParagrpah>
      <ClickMent>시작하려면 클릭하세요.</ClickMent>
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

const LogoImg = styled.img`
  width: 15rem;
`;

const TitleParagrpah = styled.p`
  color: white;
  font-weight: 800;
  font-size: 7rem;
  font: san-serif;
  padding: 5rem;
`;

function blinkingEffect() {
  return keyframes`
    50% {
      opacity: 0;
    }
  `;
}

const ClickMent = styled.p`
  color: gray;
  font-size: 2rem;
  animation: ${blinkingEffect} 2.5s linear infinite;
  }
`;