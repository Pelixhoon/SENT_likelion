import React, { useState, useEffect } from "react";
import APIs from "../api/Main";
import styled from "styled-components";
import Button from "../styles/Button";
import { useNavigate } from "react-router-dom";

export default function MySent() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const navigateToPostSent = () => {
    navigate("/postsent");
  };

  const navigateToSentList = () => {
    navigate("/mysentlist");
  };
  const fetchPosts = async () => {
    try {
      // setError(null);
      // setPosts(null);
      // setLoading(true);
      const response = await APIs.getSENTS();
      console.log("SENT 목록", response.data);
      setPosts(response.data);
    } catch (e) {
      console.log("SENT 목록 조회 실패", e);
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <MainWrapper>
      <ButtonImg2 src="./images/backbutton.png" alt="sent_button"></ButtonImg2>

      {error && <p>error</p>}
      {loading && <p>loading...</p>}
      {posts &&
        posts.map((post) => (
          <PostSection>
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
      <Button onClick={navigateToPostSent}>카테고리 만들기</Button>
      {/* <button onClick={postPost}>임의로 post 버튼</button> */}
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

const PostSection = styled.div`
  display: flex;
  flex-direction: column 1rem;
  justify-content: center;
  align-items: center;
  border: solid;
  border-radius: 2rem;
  margin-top: 2rem;
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

const ButtonImg = styled.img`
  width: 4.5rem;
  transform: rotate(180deg);
`;

const ButtonImg2 = styled.img`
  width: 4.5rem;
`;
