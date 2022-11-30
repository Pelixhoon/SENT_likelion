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
        <PinkImgDiv>
          <PinkImg src="./images/pink2.png" alt="sent_pink"></PinkImg>
        </PinkImgDiv>
        <BoxMysentContent>
          <BoxWord>MY SENT&nbsp;&nbsp;</BoxWord>
          <ButtonImg
            src="./images/sent_button.png"
            alt="sent_button"
          ></ButtonImg>
        </BoxMysentContent>
      </Box>
      <StyledParagraph>CHART</StyledParagraph>
      <Box color="white" fontSize="2rem">
        <BoxChartContent>
          <SelectWhen>
            <option>최근 일주일 간</option>
            <option>최근 한달 간</option>
            <option>최근 1년 간</option>
          </SelectWhen>
          <BoxChartText>
            <SentSpan>으쌰으쌰 운동🏃🏻‍♀️</SentSpan>에
          </BoxChartText>
          <BoxChartText>제일 많이 SENT를 남겼어요</BoxChartText>
          <Chart></Chart>
        </BoxChartContent>
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
  margin-top: 3rem;
`;

const Box = styled.button`
  font-size: ${(props) => props.fontSize};
  height: 29rem;
  width: 39.7rem;
  color: ${(props) => props.color};
  border: none;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 1rem;
`;

const PinkImgDiv = styled.div`
`;

const PinkImg = styled.img`
  margin-top: 2rem;
  width: 34rem;
  opacity: 0.8;
`;

const BoxMysentContent = styled.div`
  width: 39.7rem;
  margin-top: -2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 2rem;
  position: relative;
  top: -5rem;
`;

const BoxWord = styled.p`
  font-weight: bold;
`;

const ButtonImg = styled.img`
  width: 4.5rem;
`;

const BoxChartContent = styled.div`
  margin: 0rem 1.35rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 37rem;
`;

const SelectWhen = styled.select`
  width: 12.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 0.8rem;
  padding: 0.5rem;
  background-color: rgba(115, 115, 115, 1);
  color: white;
`;

const BoxChartText = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  margin-top: 0.3rem;
`;

const SentSpan = styled.span`
  font-size: 2.8rem;
`;

const Chart = styled.div`
  height: 20rem;
  background-color: gray;
`;
