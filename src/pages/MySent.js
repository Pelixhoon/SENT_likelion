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
      {error && <p>error</p>}
      {loading && <p>loading...</p>}
      {posts &&
        posts.map((post) => (
          <div key={post.pk}>
            <h1>{post.title}</h1>
            <Button onClick={navigateToSentList}>SENT목록 보기</Button>
            {/* <p>{post.published_date}</p> */}
          </div>
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
