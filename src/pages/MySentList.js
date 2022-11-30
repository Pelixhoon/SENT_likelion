import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Button from "../styles/Button";
import { useNavigate } from "react-router-dom";

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
        const response = await axios.get("http://127.0.0.1:8000/comments/");
        console.log("response", response.data);
        setComments(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchComments();
  }, []);

  return (
    <MainWrapper>
      {error && <p>error</p>}
      {loading && <p>loading...</p>}
      {comments &&
        comments.map((post) => (
          <div key={comments.pk}>
            <h1>{comments.post}</h1>
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
