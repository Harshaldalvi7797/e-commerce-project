import axios from "axios";
const CONTACT_ENDPOINT = "http://localhost:4600/api/contact";

let config = {
  headers: {
    "Content-type": "application/json"
  }
};

export const Contact = () => {
  return axios.post(CONTACT_ENDPOINT, config);
};
