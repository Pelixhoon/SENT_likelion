import axios from "axios";
import { API_URL } from "../Config";

// 로그인 함수
const login = async (userInfo) => {
  const response = await axios.post(API_URL.LOGIN, {
    username: userInfo.username,
    password: userInfo.password,
  });
  return response;
};

// 회원가입 함수
const signup = async (userInfo) => {
  const response = await axios.post(API_URL.SIGNUP, {
    username: userInfo.username,
    password: userInfo.password,
    password2: userInfo.password2,
    email: userInfo.email,
  });
  return response;
};

// 프로필 조회 함수
const getProfile = async (token) => {
  const response = await axios.get(API_URL.PROFILE + token);
  return response;
};

// SENT를 post하는 함수
const postSENT = async (SENTInfo, token) => {
  const response = await axios.post(
    API_URL.POST_SENT,
    {
      title: SENTInfo.title,
      category: SENTInfo.category,
      color: SENTInfo.color,
    },
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }
  );
  return response;
};

// 전체 SENT를 get하는 함수
const getSENTS = async () => {
  const response = await axios.get(API_URL.GET_SENTS);
  return response;
};

// 전체 Comment를 get하는 함수
const getCOMMENTS = async () => {
  const response = await axios.get(API_URL.GET_COMMENTS);
  return response;
};

const postComment = async (CommentInfo, token) => {
  const response = await axios.post(
    API_URL.POST_COMMENT,
    {
      post: CommentInfo.pk,
      text: CommentInfo.text,
    },
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }
  );
  return response;
};

const APIs = {
  login,
  signup,
  postSENT,
  getSENTS,
  getProfile,
  getCOMMENTS,
  postComment,
};

export default APIs;
