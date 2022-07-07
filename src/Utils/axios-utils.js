import Axios from "axios";

const client = Axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_PORT}/api`,
});

export const request = ({ ...options }) => {
  client.defaults.headers.common["x-auth-token"] = JSON.parse(
    localStorage.getItem("userInfo")
  )?.authToken;
  const onSuccess = (response) => response;
  const onError = (error) => error;
  return client(options).then(onSuccess).catch(onError);
};
