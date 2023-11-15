import Axios from "./axios.service";

const login = async (username, password) => {
  const res = await Axios.post(`/api/auth/signIn`, { username, password });
  if (res.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(res.data));
    localStorage.setItem("token", JSON.stringify(res.data.accessToken));
  }
  return res;
};

const register = async (username, email, password) => {
  return await Axios.post(`/api/auth/signUp`, { username, email, password });
};

const getUser = () => {
  return JSON.parse(localStorage.getItem("user") || "null");
};

const authservice = {
  login,
  register,
  getUser,
};

export default authservice;
