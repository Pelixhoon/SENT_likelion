import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Main() {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");

  // 로그인 함수
  const login = async () => {
    await axios
      .post("http://127.0.0.1:8000/user/login/", {
        "username": "admin",
        "password": "zzang0901",
      })
      .then(function (response) {
        console.log("로그인 성공", response);
        setToken(response.data.token);
      })
      .catch(function (error) {
        console.log("로그인 실패", error);
      });
  };

  // 회원가입 함수
  const signup = async () => {
    await axios
      .post("http://127.0.0.1:8000/user/userRegister/", {
        "username": "admin",
        "password": "zzang0901",
        "password2": "zzang0901",
        "email": "admin@likelion.org",
      })
      .then(function (response) {
        console.log("회원가입 성공", response);
        setUsername(response.data.username);
      })
      .catch(function (error) {
        console.log("회원가입 실패", error);
      });
  };

  // Post를 post하는 함수
  const postPost = async () => {
    await axios
      .post("http://127.0.0.1:8000/posts/", {
        title: "프런트엔드 공부",
        body: "리액트!",
        category: "개발",
      })
      .then(function (response) {
        console.log("등록 결과", response);
      })
      .catch(function (error) {
        console.log("등록 에러", error);
      });
  };

  return (
    <MainWrapper>
      <img src="/images/logo.png" alt="logo" />
      <TitleParagrpah>SENT</TitleParagrpah>
      <button onClick={postPost}>포스트 등록</button>
      <button onClick={signup}>회원가입</button>
      <button onClick={login}>로그인</button>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
`;

const TitleParagrpah = styled.p`
  color: white;
  font-size: 5rem;
  font: san-serif;
`;

/*
height: calc(var(--vh, 1vh) * 100);
*/
