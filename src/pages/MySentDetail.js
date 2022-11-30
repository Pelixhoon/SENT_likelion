import React, { useState, useEffect } from "react";
import APIs from "../api/Main";
import styled from "styled-components";
import Button from "../styles/Button";
import { useNavigate, useParams } from "react-router-dom";

export default function MySentDetail(props) {
  const { id } = useParams();
  console.log(id);

  const [mySENTS, setMySENTS] = useState(null);
  const [myCOMMENTS, setMyCOMMENTS] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const navigateToPostComment = () => {
    navigate("/postcomment/" + id);
  };

  const getMySENTS = async (userId) => {
    try {
      const response = await APIs.getSENTS();
      // console.log(
      //   "MY SENT filter 목록",
      //   response.data.filter((SENT) => SENT.profile.user.toString() === userId)
      // );
      const posts = response.data.filter(
        (SENT) => SENT.profile.user.toString() === userId
      );
      setMySENTS(posts);
      const comments = posts.filter((post) => post.pk.toString() === id)[0]
        .comments;
      setMyCOMMENTS(comments);
    } catch (e) {
      console.log("SENT 목록 조회 실패", e);
      setError(e);
    }
    setLoading(false);
  };
  // const getMyCOMMENTS = async (userId) => {
  //   try {
  //     const response = await APIs.getCOMMENTS();
  //     console.log(response.data);
  //     //   console.log(
  //     //     "MY SENT filter 목록",
  //     //     response.data.filter((SENT) => SENT.profile.user.toString() === userId)
  //     //   );
  //     setMyCOMMENTS(
  //       response.data.filter((SENT) => SENT.profile.user.toString() === userId)
  //     );
  //   } catch (e) {
  //     console.log("SENT 목록 조회 실패", e);
  //     setError(e);
  //   }
  //   setLoading(false);
  // };

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    getMySENTS(userId);
  }, []);

  return (
    <MainWrapper>
      <ButtonImg2 src="./images/backbutton.png" alt="sent_button"></ButtonImg2>
      {error && <p>error</p>}
      {loading && <p>loading...</p>}
      {myCOMMENTS &&
        myCOMMENTS.map((comment) => (
          <PostSection key={comment.pk}>
            <div key={comment.pk}>
              <p>{comment.text}</p>
              {/* <Button onClick={navigateToSentList}>SENT목록 보기</Button> */}
              {/* <p>{post.published_date}</p> */}
            </div>
            <ButtonImg
              src="./images/backbutton.png"
              alt="sent_button"
            ></ButtonImg>
          </PostSection>
        ))}
      <Button onClick={navigateToPostComment}>SENT 추가하기✏️</Button>
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

const ButtonImg = styled.img`
  width: 4.5rem;
  transform: rotate(180deg);
`;

const ButtonImg2 = styled.img`
  width: 4.5rem;
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
