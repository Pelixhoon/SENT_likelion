import React, { useEffect, useState } from "react";
import APIs from "../api/Main";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../styles/Button";

// -- [] 로그인 실패시, 예외처리하기

export default function Login() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isEnable, setIsEnable] = useState(true);

  useEffect(() => {
    userInfo.username && userInfo.password
      ? setIsEnable(false)
      : setIsEnable(true);
  }, [userInfo]);

  const valid = !(userInfo.username && userInfo.password);

  const onFormChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    await APIs.login(userInfo)
      .then((response) => {
        console.log("로그인 성공", response);
        localStorage.setItem("token", response.data.token);
        navigate("/home");
      })
      .catch((error) => {
        console.log("로그인 실패", error);
        setError(error);
      });
  };

  return (
    <MainWrapper>
      <LoginTitle>로그인</LoginTitle>
      <form onSubmit={handleLoginSubmit}>
        <LoginSection>
          <IDPWTitle>아이디</IDPWTitle>
          <IDPWInput
            name="username"
            onChange={onFormChange}
            value={userInfo.username}
          ></IDPWInput>
          <IDPWTitle>비밀번호</IDPWTitle>
          <IDPWInput
            type="password"
            name="password"
            onChange={onFormChange}
            value={userInfo.password}
          ></IDPWInput>
          {/* {error.msg ==='' && <p>{error.msg}</p>} */}
          {/* <NavLink to="/#">비밀번호를 잊으셨나요?</NavLink> */}
        </LoginSection>
        <Button type="submit" disabled={valid}>
          로그인
        </Button>
      </form>
      <SignupSection>
        <SubParagraph>SENT가 처음이신가요?&nbsp;&nbsp;&nbsp;</SubParagraph>
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
  padding: 6rem;
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
