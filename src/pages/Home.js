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
        <PinkImg src="./images/pink.png" alt="sent_pink"></PinkImg>
        <BoxContent>
          <BoxWord>MY SENT</BoxWord>
          <ButtonImg src="./images/sent_button.png" alt="sent_button"></ButtonImg>
        </BoxContent>
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
  font-weight: 800;
  width: 45rem;
  padding: 1rem 3rem;
  margin-top: 5rem;
`;

const Box = styled.button`
  font-size: ${(props) => props.fontSize};
  height: 35rem;
  width: 39.7rem;
  color: ${(props) => props.color};
  border: none;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 1rem;
`;

const PinkImg = styled.img`
  width: 40rem;
`;

const BoxContent = styled.div`
  width: 39.7rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 2rem;
`;

const BoxWord = styled.p`
  font-weight: bold;
`;

const ButtonImg = styled.img`
  width: 4rem;
`;