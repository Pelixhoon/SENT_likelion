import React, { useState } from "react";
import axios from "axios";
import APIs from "../api/Main";
import styled from "styled-components";

export default function Main() {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [post, setPost] = useState({});

  // 로그인 함수
  const onLoginClick = async () => {
    await APIs.login({
      username: "yilin",
      password: "yilin0901",
    })
      .then(function (response) {
        console.log("로그인 성공", response);
        setToken(response.data.token);
      })
      .catch(function (error) {
        console.log("로그인 실패", error);
      });
  };

  const onSignupClick = async () => {
    await APIs.signup({
      username: "yilin",
      password: "yilin0901",
      password2: "yilin0901",
      email: "yilin@likelion.org",
    })
      .then(function (response) {
        console.log("회원가입 성공", response);
        setUsername(response.data.username);
      })
      .catch(function (error) {
        console.log("회원가입 실패", error);
      });
  };

  const onPostSENTClick = async () => {
    await APIs.postSENT(
      {
        title: "멋사 프로젝트",
        body: "멋사 짱짱맨",
        category: "개발",
      },
      token
    )
      .then(function (response) {
        console.log("등록 결과", response);
        setPost(response.data);
      })
      .catch(function (error) {
        console.log("등록 에러", error);
      });
  };

  return (
    <MainWrapper>
      <img src="/images/logo.png" alt="logo" />
      <TitleParagrpah>SENT</TitleParagrpah>
      <button onClick={onPostSENTClick}>포스트 등록</button>
      <button onClick={onSignupClick}>회원가입</button>
      <button onClick={onLoginClick}>로그인</button>
      <div>
        <p>{post.title}</p>
      </div>
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
