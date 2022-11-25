import React, { useState } from "react";
import APIs from "../api/Main";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Button from "../styles/Button";

export default function Login() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const onUsernameChange = (e) => {
    // console.log("유저네임", e.target.value);
    setUserInfo({ ...userInfo, username: e.target.value });
  };

  const onPasswordChange = (e) => {
    // console.log("패스워드", userInfo.username);
    setUserInfo({ ...userInfo, password: e.target.value });
  };

  const [token, setToken] = useState("");

  const onLoginClick = async () => {
    await APIs.login(userInfo)
      .then((response) => {
        console.log("로그인 성공", response);
        setToken(response.data.token);
      })
      .catch((error) => {
        console.log("로그인 실패", error);
        setError(error);
      });
  };

  return (
    <MainWrapper>
      <LoginTitle>로그인</LoginTitle>
      <LoginSection>
        <p>아이디</p>
        <input
          name="username"
          onChange={onUsernameChange}
          value={userInfo.username}
        ></input>
        <p>비밀번호</p>
        <input
          name="password"
          onChange={onPasswordChange}
          value={userInfo.password}
        ></input>
        {/* {error.msg ==='' && <p>{error.msg}</p>} */}
        {/* <NavLink to="/#">비밀번호를 잊으셨나요?</NavLink> */}
      </LoginSection>
      <Button onClick={onLoginClick}>로그인</Button>
      <SignupSection>
        <SubParagraph>SENT가 혹시 처음이세요?</SubParagraph>
        <NavLink to="/signup">회원가입</NavLink>
      </SignupSection>
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

const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  font-size: 2rem;
`;

const LoginTitle = styled.div`
  font-size: 2.3rem;
`;

const SignupSection = styled.div`
  display: flex;
  flex-direction: row;
  padding: 3rem;
  font-size: 1.5rem;
`;

const SubParagraph = styled.p`
  font-size: 1.5rem;
`;
