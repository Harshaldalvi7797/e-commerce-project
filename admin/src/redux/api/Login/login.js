import axios from "axios";
const LOGIN_ENDPOINT = "http://localhost:4600/api/admin/adminLogin";
let config = {
  headers: {
    "Content-type": "application/json"
  }
};
export const Login = data => {
  return axios.post(LOGIN_ENDPOINT, JSON.stringify(data), config);
};
