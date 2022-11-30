import React, { useState, useEffect } from "react";
import APIs from "../api/Main";
import styled from "styled-components";
import Button from "../styles/Button";
import { useNavigate } from "react-router-dom";

export default function MySent() {
  const [mySENTS, setMySENTS] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const navigateToPostSent = () => {
    navigate("/postsent");
  };

  const getMySENTS = async (userId) => {
    try {
      const response = await APIs.getSENTS();
      console.log(
        "MY SENT filter 목록",
        response.data.filter((SENT) => SENT.profile.user.toString() === userId)
      );
      setMySENTS(
        response.data.filter((SENT) => SENT.profile.user.toString() === userId)
      );
    } catch (e) {
      console.log("SENT 목록 조회 실패", e);
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    userId ? getMySENTS(userId) : navigate("/login");
  }, []);

  return (
    <MainWrapper>
      <PageTop>
        <ButtonImg2
          src="./images/backbutton.png"
          alt="sent_button"
        ></ButtonImg2>
        <PageTitleDiv>
          <PageTitle>MY SENT</PageTitle>
        </PageTitleDiv>
      </PageTop>

      {error && <p>error</p>}
      {loading && <p>loading...</p>}
      {mySENTS &&
        mySENTS.map((post) => (
          <PostSection key={post.pk}>
            <div key={post.pk}>
              <PostTitle>{post.title}</PostTitle>
              {/* <Button onClick={navigateToSentList}>SENT목록 보기</Button> */}
              {/* <p>{post.published_date}</p> */}
            </div>
            <ButtonImg
              src="./images/backbutton.png"
              alt="sent_button"
            ></ButtonImg>
          </PostSection>
        ))}
      <DivForStaticButton>
        <Button onClick={navigateToPostSent}>카테고리 만들기</Button>
      </DivForStaticButton>
      {/* <button onClick={postPost}>임의로 post 버튼</button> */}
    </MainWrapper>
  );
}
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 800px;
  color: white;
`;

const PageTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 45rem;
`;

const ButtonImg2 = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  margin-left: 2.5rem;
`;

const PageTitleDiv = styled.div`
  width: 31rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  margin: 6rem;
`;

const PostSection = styled.div`
  display: flex;
  flex-direction: column 1rem;
  justify-content: space-between;
  align-items: center;
  border: solid;
  border-radius: 2rem;
  margin-top: 0rem;
  margin-bottom: 2rem;
  padding: 3rem;
  background-color: lightblue;
  color: black;
  width: 40rem;
  height: 12rem;
`;

const PostTitle = styled.p`
  font-size: 3rem;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;
`;

const DivForStaticButton = styled.div`
  position: fixed;
  margin-top: 65.563rem;
`;

const ButtonImg = styled.img`
  width: 4.5rem;
  transform: rotate(180deg);
`;
