// const BASE_URL = process.env.REACT_APP_SERVER_HOST;
const BASE_URL = "http://localhost:8000";
const API_URL = {
  LOGIN: `${BASE_URL}/user/login/`,
  SIGNUP: `${BASE_URL}/user/userRegister/`,
  POST_SENT: `${BASE_URL}/posts/`,
  PROFILE: `${BASE_URL}/user/profile/`,
  SENTLIST: `${BASE_URL}/posts/`,
};

export { BASE_URL, API_URL };
