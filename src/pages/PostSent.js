import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import axios from "axios";
// import APIs from "../api/Main";
// import Button from "../styles/Button";

export default function PostSent() {
  // const [posts, setPosts] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [SENTinfo, setSENTinfo] = useState({
  //   title: "",
  // });

  // const onFormChange = (e) => {
  //   // console.log(e.target.name, e.target.value);
  //   setSENTinfo({ ...SENTinfo, [e.target.name]: e.target.value });
  // };

  // //Post를 post하는 함수
  // const handlePostSent = async (e) => {
  //   await APIs.postSENT(SENTinfo)
  //     .then(function (response) {
  //       console.log("등록 결과", response);
  //     })
  //     .catch(function (error) {
  //       console.log("등록 에러", error);
  //     });
  // };

  return (
    <MainWrapper>
      {/* <h1>회원가입</h1>
      <form onSubmit={handlePostSent}>
        <p>SENT 이름</p>
        <input
          name="username"
          onChange={onFormChange}
          value={SENTinfo.title}
        ></input>
        <Button type="submit">회원가입</Button>
      </form> */}
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
