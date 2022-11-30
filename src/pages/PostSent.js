import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import APIs from "../api/Main";
import Button from "../styles/Button";
import { useNavigate } from "react-router-dom";

export default function PostSent() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [SENTinfo, setSENTinfo] = useState({
    title: "",
    color: "",
  });
  const navigate = useNavigate();
  const [isEnable, setIsEnable] = useState(true);

  const valid = !(SENTinfo.title && SENTinfo.color);

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
    await APIs.postSENT(SENTinfo)
      .then((response) => {
        console.log("SENT 등록 결과", response);
        navigate("/");
      })
      .catch((error) => {
        console.log("SENT 등록 에러", error);
        setError(error);
      });
  };

  return (
    <MainWrapper>
      <h1>SENT 만들기</h1>
      <form onSubmit={handlePostSent}>
        <FormSection>
          <p>SENT 이름</p>
          <input
            name="title"
            onChange={onFormChange}
            value={SENTinfo.title}
          ></input>
          <p>색상</p>
          <select
            autoFocus
            name="color"
            onChange={onFormChange}
            value={SENTinfo.color}
          >
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="purple">Purple</option>
          </select>
          <Button type="submit" disabled={valid}>
            만들기
          </Button>
        </FormSection>
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

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
`;
