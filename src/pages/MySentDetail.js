import React, { useState, useEffect } from "react";
import APIs from "../api/Main";
import styled from "styled-components";
import Button from "../styles/Button";
import { useNavigate, useParams, Link } from "react-router-dom";
import COLORS from "../styles/Colors";

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

  const navigateToBack = () => {
    navigate(-1);
  };

  const getMySENTS = async (userId) => {
    try {
      const response = await APIs.getSENTS();
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
      <PageTop>
        <Link to="/mysent">
          <button>
            <ButtonImg2
              src="../images/backbutton.png"
              alt="sent_button"
            ></ButtonImg2>
          </button>
        </Link>
        <PageTitleDiv>
          <PageTitle>MY SENT</PageTitle>
        </PageTitleDiv>
      </PageTop>

      {error && <p>error</p>}
      {loading && <p>loading...</p>}
      {myCOMMENTS &&
        myCOMMENTS.map((comment) => (
          <PostSection key={comment.pk} colorOption={COLORS[comment.color]}>
            <CommentDiv key={comment.pk}>
              <Comment>{comment.text}</Comment>
              {/* <Button onClick={navigateToSentList}>SENT목록 보기</Button> */}
              {/* <p>{post.published_date}</p> */}
            </CommentDiv>
          </PostSection>
        ))}
      <DivForStaticButton>
        <Button onClick={navigateToPostComment}>SENT 추가하기✏️</Button>
      </DivForStaticButton>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: fle-xstart;
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
  background-color: white;
  color: black;
  width: 40rem;
  height: 12rem;
`;

// const PostTitle = styled.p`
//   font-size: 3rem;
//   font-family: "Noto Sans KR", sans-serif;
//   font-weight: 700;
// `;

const DivForStaticButton = styled.div`
  position: fixed;
  margin-top: 65.563rem;
`;

const CommentDiv = styled.div``;

const Comment = styled.p`
  width: 27rem;
  word-wrap: break-word;
  font-size: 1.6rem;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;
`;
