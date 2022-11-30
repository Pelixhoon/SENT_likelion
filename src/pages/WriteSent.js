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
      <h1>SENT 만들기</h1>
      <form onSubmit={handleWriteSent}>
        <p>으쌰으쌰 운동🏃🏻‍♀️</p>
        <SentArea>
          <textarea
            name="body"
            onChange={onFormChange}
            value={SENTinfo.body}
          ></textarea>
          <Button type="submit" disabled={valid}>
            만들기
          </Button>
        </SentArea>
      </form>
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

const SentArea = styled.div`
  display: flex;
  flex-direction: column;
`;
