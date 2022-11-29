import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../styles/Button";

export default function MySentList() {
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const navigateToWriteSent = () => {
    navigate("/writesent");
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setError(null);
        setComments(null);
        setLoading(true);
        const response = await axios.get("http://127.0.0.1:8000/comments/", {
          headers: { Authorization: token },
        });
        console.log("response", response.data);
        setComments(response.data);
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
            <h1>{post.comment}</h1>
            {/* <p>{post.published_date}</p> */}
          </div>
        ))}
      <Button onClick={navigateToWriteSent}>SENT 추가하기✏️</Button>
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
