import axios from "axios";
const REGISTER_ENDPOINT = "http://localhost:4600/api/createuser";
let config = {
  headers: {
    "Content-type": "application/json"
  }
};

export const userRegister = data => {
  return axios.post(REGISTER_ENDPOINT, JSON.stringify(data), config);
};
