import React, { useState, useEffect } from "react";
import styled from "styled-components";
import APIs from "../api/Main";
import Button from "../styles/Button";
import { useNavigate, useParams } from "react-router-dom";

export default function PostComment() {
  const { id } = useParams();
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postInfo, setPostInfo] = useState({
    pk: id,
    text: "",
  });
  const navigate = useNavigate();
  const [, setIsEnable] = useState(true);

  const navigateToBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    postInfo.text ? setIsEnable(false) : setIsEnable(true);
  }, [postInfo]);

  const onFormChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setPostInfo({ ...postInfo, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    localStorage.getItem("token") && setToken(localStorage.getItem("token"));
  }, []);

  //SENT 내용을 post하는 함수
  const handlePostComment = async (e) => {
    e.preventDefault();
    await APIs.postComment(postInfo, token)
      .then((response) => {
        console.log("Comment 등록 결과", response);
        navigate("/mysent/" + id);
      })
      .catch((error) => {
        console.log("Comment 등록 에러", error);
        setError(error);
      });
  };

  return (
    <MainWrapper>
      <PageTop>
        <ButtonImg2
          src="../images/backbutton.png"
          alt="sent_button"
          onClick={navigateToBack}
        ></ButtonImg2>
        <PageTitleDiv>
          <PageTitle>SENT 추가하기</PageTitle>
        </PageTitleDiv>
      </PageTop>

      <form onSubmit={handlePostComment}>
        <SentArea>
          <TextArea
            name="text"
            onChange={onFormChange}
            value={postInfo.text}
            placeholder="오늘의 문장을 기록해보세요 :)"
          ></TextArea>
        </SentArea>
        <Button type="submit">만들기</Button>
      </form>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
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

const SentArea = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 3rem;
  padding-right: 3rem;
  font-size: 2rem;
  width: 45rem;
  height: 50rem;
`;

const TextArea = styled.textarea`
  height: 45rem;
  background-color: white;
  border-radius: 1.8rem;
  padding: 3rem;
  font-size: 2rem;
  font-weight: bold;
`;
