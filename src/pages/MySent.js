import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Button from "../styles/Button";
import { useNavigate } from "react-router-dom";

export default function MySent() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const navigateToPostSent = () => {
    navigate("/postsent");
  };

  const navigateToSentList = () => {
    navigate("/mysentlist");
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setError(null);
        setPosts(null);
        setLoading(true);
        const response = await axios.get("http://127.0.0.1:8000/posts/");
        console.log("response", response.data);
        setPosts(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
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
