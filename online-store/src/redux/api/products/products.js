import axios from "axios";

const PRODUCTS_ENDPOINT = "http://localhost:4600/api/fetchproduct";
let config = {
  headers: {
    "Content-type": "application/json"
  }
};

export const fetchProducts = () => {
  return axios.get(PRODUCTS_ENDPOINT, config);
};
