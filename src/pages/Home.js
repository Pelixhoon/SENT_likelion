import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const navigateToMySent = () => {
    navigate("/mysent");
  };

  return (
    <MainWrapper>
      <StyledParagraph>SENT</StyledParagraph>
      <Box
        onClick={navigateToMySent}
        backgroundColor="#D57988"
        color="white"
        fontSize="2.5rem"
      >
        MY SENT
      </Box>
      <StyledParagraph>CHART</StyledParagraph>
      <Box backgroundColor="white" color="black" fontSize="2rem">
        최근 일주일 간 으쌰으쌰 운동🏃🏻‍♀️에 제일 많이 SENT를 남겼어요
      </Box>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 800px;
  color: white;
`;

const StyledParagraph = styled.p`
  font-size: 3rem;
  color: white;
  font-weight: 700;
  padding: 3rem;
`;

const Box = styled.button`
  font-size: ${(props) => props.fontSize};
  height: 34rem;
  width: 38rem;
  color: ${(props) => props.color};
  border: none;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 1rem;
`;
