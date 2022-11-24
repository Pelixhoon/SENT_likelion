import React from "react";
import axios from "axios";
import APIs from "../api/Main";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Button from "../styles/Button";

export default function Signup() {
  return (
    <MainWrapper>
      <LoginTitle>회원가입</LoginTitle>
      <LoginSection>
        <p>아이디</p>
        <input></input>
        <p>비밀번호</p>
        <input></input>
      </LoginSection>
      <Button>회원가입</Button>
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
