import axios from "axios";
import { Header } from "../../../helpers/history/header";
const REGISTER_ENDPOINT = "http://localhost:4600/api/createuser";
const LOGIN_ENDPOINT = "http://localhost:4600/api/userlogin/login";
const LOGGEDIN_ENDPOINT = "http://localhost:4600/api/userlogin/me";
let config = {
  headers: {
    "Content-type": "application/json"
  }
};

export const userRegister = data => {
  return axios.post(REGISTER_ENDPOINT, JSON.stringify(data), config);
};

export const Login = data => {
  return axios.post(LOGIN_ENDPOINT, JSON.stringify(data), config);
};

export const LoggedInUser = data => {
  // @ts-ignore
  return axios.get(LOGGEDIN_ENDPOINT, { headers: Header(), config });
};
