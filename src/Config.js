// const BASE_URL = process.env.REACT_APP_SERVER_HOST;
const BASE_URL = "http://localhost:8000";
const API_URL = {
  LOGIN: `${BASE_URL}/user/login/`,
  SIGNUP: `${BASE_URL}/user/userRegister/`,
  POST_SENT: `${BASE_URL}/posts/`,
  POST_COMMENT: `${BASE_URL}/comments/`,
  PROFILE: `${BASE_URL}/user/profile/`,
  GET_SENTS: `${BASE_URL}/posts/`,
  GET_COMMENTS: `${BASE_URL}/comments/`,
};

export { BASE_URL, API_URL };
