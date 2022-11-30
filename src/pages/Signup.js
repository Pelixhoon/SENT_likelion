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

  const [error, setError] = useState({
    uesrname: "",
    email: "",
    password: "",
    password2: "",
  });

  const [, setLoginError] = useState(null);

  const navigate = useNavigate();
  const [isEnable, setIsEnable] = useState(true);

  const onFormChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
    validateInput(e);
  };

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };
      switch (name) {
        case "password2":
          if (userInfo.password2 && value === userInfo.password) {
            stateObj[name] = "비밀번호가 일치해요 :)";
          } else if (userInfo.password && value !== userInfo.password2) {
            stateObj[name] = "비밀번호가 일치하지 않아요!";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

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

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    await APIs.signup(userInfo)
      .then((response) => {
        console.log("회원가입 성공", response);
        navigate("/login");
      })
      .catch((error) => {
        console.log("회원가입 실패", error);
        setLoginError(error.response.data);
        let e = error.response.data;
        let errorMsg = "";
        // console.log(error);
        for (var key in e) {
          if (e.hasOwnProperty(key)) {
            errorMsg += e[key] + "\n";
          }
        }
        console.log(errorMsg);
        alert(errorMsg);
      });
  };

  return (
    <MainWrapper>
      <LoginTitle>회원가입</LoginTitle>
      <form onSubmit={handleSignupSubmit}>
        <LoginSection>
          <IDPWTitle>아이디</IDPWTitle>
          <IDPWInput
            name="username"
            onChange={onFormChange}
            onBlur={validateInput}
            value={userInfo.username}
            placeholder="영문, 숫자 8자 이상 입력해주세요."
          ></IDPWInput>
          <IDPWTitle>이메일</IDPWTitle>
          <IDPWInput
            name="email"
            onChange={onFormChange}
            value={userInfo.email}
            placeholder="이메일을 입력해주세요."
          ></IDPWInput>
          <IDPWTitle>비밀번호</IDPWTitle>
          <IDPWInput
            name="password"
            type="password"
            onChange={onFormChange}
            value={userInfo.password}
            onBlur={validateInput}
            placeholder="영문, 숫자 8자 이상 입력해주세요."
          ></IDPWInput>
          <IDPWTitle>비밀번호 확인</IDPWTitle>
          <IDPWInput
            name="password2"
            type="password"
            onChange={onFormChange}
            value={userInfo.password2}
            onBlur={validateInput}
            placeholder="비밀번호를 다시 한 번 입력해주세요."
          ></IDPWInput>
          <PwValidation>
            {error.password2 && <span className="err">{error.password2}</span>}
          </PwValidation>
        </LoginSection>
        <Button type="submit" disabled={valid}>
          회원가입
        </Button>
      </form>
      <SignupSection>
        <SubParagraph>이미 계정이 있으신가요?&nbsp;&nbsp;&nbsp;</SubParagraph>
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
  padding-left: 6rem;
  padding-right: 6rem;
  font-size: 2rem;
  width: 45rem;
`;

const IDPWInput = styled.input`
  height: 3.8rem;
  margin-bottom: 2.5rem;
  color: white;
  font-size: 2rem;
  background-color: rgba(25, 25, 25, 1);
  border: 0.3rem;
  border-bottom-style: solid;
  border-color: rgba(25, 25, 25, 1);
  border-bottom-color: rgba(78, 25, 255, 1);
  &::placeholder {
    font-size: 1.5rem;
  }
`;

const IDPWTitle = styled.p`
  margin-bottom: 0.5rem;
`;

const LoginTitle = styled.div`
  font-size: 3.2rem;
  width: 45rem;
  padding: 6rem;
`;

const SignupSection = styled.div`
  display: flex;
  flex-direction: row;
  padding: 3rem;
  font-size: 1.5rem;
`;

const SubParagraph = styled.p`
  font-size: 1.5rem;
  color: rgba(87, 87, 87, 1);
`;

const PwValidation = styled.div`
  font-size: 1.5rem;
  margin-top: -1.5rem;
  margin-bottom: 2.5rem;
`;
