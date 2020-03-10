import axios from "axios";
import { Header } from "../../../helpers/history/header";

const FORGET_PASSWORD = "http://localhost:4600/api/nodemailer";

let config = {
  headers: {
    "Content-type": "application/json"
  }
};
export const forgetpassword = data => {
  return axios.post(FORGET_PASSWORD, JSON.stringify(data), config);
};
