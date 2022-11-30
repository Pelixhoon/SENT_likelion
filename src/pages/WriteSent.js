import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import APIs from "../api/Main";
import Button from "../styles/Button";
import { useNavigate } from "react-router-dom";

export default function WriteMySent() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [SENTinfo, setSENTinfo] = useState({
    body: "",
  });
  const navigate = useNavigate();

  const [isEnable, setIsEnable] = useState(true);

  const valid = !SENTinfo.body;

  useEffect(() => {
    SENTinfo.body ? setIsEnable(false) : setIsEnable(true);
  }, [SENTinfo]);

  const onFormChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setSENTinfo({ ...SENTinfo, [e.target.name]: e.target.value });
  };

  //SENT 내용을 post하는 함수
  const handleWriteSent = async (e) => {
    e.preventDefault();
    await APIs.postSENT(SENTinfo)
      .then((response) => {
        console.log("SENT 등록 결과", response);
        navigate("/#");
      })
      .catch((error) => {
        console.log("SENT 등록 에러", error);
        setError(error);
      });
  };

  return (
    <MainWrapper>
      <PageTitle>만든 이름으로 들어가야 함</PageTitle>
      <form onSubmit={handleWriteSent}>
        <SentArea>
          <TextArea
            name="body"
            onChange={onFormChange}
            value={SENTinfo.body}
            placeholder="오늘의 문장을 기록해보세요 :)"
          ></TextArea>
        </SentArea>
        <Button type="submit" disabled={valid}>
            만들기
        </Button>
      </form>
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
  background-color: rgba(145, 255, 238, 1);
  border-radius: 1.8rem;
  padding: 3rem;
  font-size: 2rem;
  font-weight: bold;
`;