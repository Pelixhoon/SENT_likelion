import React, { useState, useEffect } from "react";
import axios from "axios";
import APIs from "../api/Main";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../styles/Button";

//-- [] 회원가입시 password와 password2가 같은지 확인하고 동일하지 않을 때 예외처리
//-- [] 회원가입시 이미 있는 아이디, 비밀번호 조건 불충족 등 조건에 맞지 않아 회원가입 에러뜰 때 예외처리

export default function Signup() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isEnable, setIsEnable] = useState(true);

  useEffect(() => {
    userInfo.username &&
    userInfo.password &&
    userInfo.password &&
    userInfo.password2
      ? setIsEnable(false)
      : setIsEnable(true);
  }, [userInfo]);

  const valid = !(
    userInfo.username &&
    userInfo.email &&
    userInfo.password &&
    userInfo.password2
  );

  const onFormChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    await APIs.signup(userInfo)
      .then((response) => {
        console.log("회원가입 성공", response);
        navigate("/login");
      })
      .catch((error) => {
        console.log("회원가입 실패", error);
        setError(error);
      });
  };

  return (
    <MainWrapper>
      <LoginTitle>회원가입</LoginTitle>
      <form onSubmit={handleSignupSubmit}>
        <LoginSection>
          <p>아이디</p>
          <input
            name="username"
            onChange={onFormChange}
            value={userInfo.username}
          ></input>
          <p>이메일</p>
          <input
            name="email"
            onChange={onFormChange}
            value={userInfo.email}
          ></input>
          <p>비밀번호</p>
          <input
            name="password"
            onChange={onFormChange}
            value={userInfo.password}
          ></input>
          <p>비밀번호 확인</p>
          <input
            name="password2"
            onChange={onFormChange}
            value={userInfo.password2}
          ></input>
        </LoginSection>
        <Button type="submit" disabled={valid}>
          회원가입
        </Button>
      </form>
      <SignupSection>
        <SubParagraph>이미 계정이 있으신가요?</SubParagraph>
        <NavLink to="/login">로그인</NavLink>
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
