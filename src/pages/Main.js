import React from "react";
import styled from "styled-components";

export default function Main() {
  return (
    <MainContainer>
      <MainWrapper>
        <div>
          <p>SENT</p>
        </div>
      </MainWrapper>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  font-size: 3rem;
  background-color: black;
`;

const MainWrapper = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  width: 450px;
  height: 600px;
  background-color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
  }
`;
