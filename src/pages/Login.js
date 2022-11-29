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
  const [token, setToken] = useState("");
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
        setToken(response.data.token);
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
          <p>아이디</p>
          <input
            name="username"
            onChange={onFormChange}
            value={userInfo.username}
          ></input>
          <p>비밀번호</p>
          <input
            name="password"
            onChange={onFormChange}
            value={userInfo.password}
          ></input>
          {/* {error.msg ==='' && <p>{error.msg}</p>} */}
          {/* <NavLink to="/#">비밀번호를 잊으셨나요?</NavLink> */}
        </LoginSection>
        <Button type="submit" disabled={valid}>
          로그인
        </Button>
      </form>
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
