import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import APIs from "../api/Main";
import Button from "../styles/Button";
import { useNavigate } from "react-router-dom";

export default function PostSent() {
  const [token, setToken] = useState(null);
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [SENTinfo, setSENTinfo] = useState({
    title: "",
    category: "",
    color: "",
  });
  const navigate = useNavigate();
  const [isEnable, setIsEnable] = useState(true);

  const valid = !(SENTinfo.title && SENTinfo.color);

  // 컴포넌트 마운트 시, 로컬스토리지에서 토큰 가져오기
  useEffect(() => {
    localStorage.getItem("token") && setToken(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    SENTinfo.title && SENTinfo.color ? setIsEnable(false) : setIsEnable(true);
  }, [SENTinfo]);

  const onFormChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setSENTinfo({ ...SENTinfo, [e.target.name]: e.target.value });
  };

  //Post를 post하는 함수
  const handlePostSent = async (e) => {
    e.preventDefault();
    await APIs.postSENT(SENTinfo, token)
      .then((response) => {
        console.log("SENT 등록 결과", response);
        navigate("/mysent");
      })
      .catch((error) => {
        console.log("SENT 등록 에러", error);
        setError(error);
      });
  };

  return (
    <MainWrapper>
      <PageTitle>SENT 만들기</PageTitle>
      <form onSubmit={handlePostSent}>
        <FormSection>
          <ChoiceTitle>SENT 이름</ChoiceTitle>
          <ChoiceInputName
            name="title"
            onChange={onFormChange}
            value={SENTinfo.title}
          ></ChoiceInputName>
          <ChoiceTitle>색상</ChoiceTitle>
          <ChoiceColorSelect
            autoFocus
            name="color"
            onChange={onFormChange}
            value={SENTinfo.color}
          >
            <option value="red">🔴 Red</option>
            <option value="orange">🟠 Orange</option>
            <option value="yellow"> 🟡 Yellow</option>
            <option value="green">🟢 Green</option>
            <option value="blue">🔵 Blue</option>
            <option value="purple">🟣 Purple</option>
          </ChoiceColorSelect>
        </FormSection>
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

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 6rem;
  padding-right: 6rem;
  font-size: 2rem;
  width: 45rem;
  height: 50rem;
`;

const ChoiceTitle = styled.p``;

const ChoiceInputName = styled.input`
  height: 3.8rem;
  margin-bottom: 2.5rem;
  color: white;
  font-size: 2rem;
  background-color: rgba(25, 25, 25, 1);
  border: 0.3rem;
  border-bottom-style: solid;
  border-color: rgba(25, 25, 25, 1);
  border-bottom-color: rgba(78, 25, 255, 1);
`;

const ChoiceColorSelect = styled.select`
  height: 3.8rem;
  margin-bottom: 2.5rem;
  color: white;
  font-size: 2rem;
  background-color: rgba(25, 25, 25, 1);
  border: 0.3rem;
  border-bottom-style: solid;
  border-color: rgba(25, 25, 25, 1);
  border-bottom-color: rgba(78, 25, 255, 1);
`;
