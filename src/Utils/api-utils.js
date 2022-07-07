import axios from "axios";

const request = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_PORT}/api`,
});

request.interceptors.request.use((config) => {
  config.headers["x-auth-token"] = localStorage.getItem("userInfo")?.authToken;
  return config;
});

export default request;
