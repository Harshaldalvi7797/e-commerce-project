import axios from "axios";

const PRODUCTS_ENDPOINT = "http://localhost:4600/api/fetchproduct";
const FETCH_PRODUCT_BYID = "http://localhost:4600/api/fetchproduct/";
let config = {
  headers: {
    "Content-type": "application/json"
  }
};

export const fetchProducts = () => {
  return axios.get(PRODUCTS_ENDPOINT, config);
};
export const fetchProductsId = id => {
  return axios.get(FETCH_PRODUCT_BYID + id, config);
};
