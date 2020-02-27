import axios from "axios";
import { AddToCart } from "../../action/products/products";

const PRODUCTS_ENDPOINT = "http://localhost:4600/api/fetchproduct";
const FETCH_PRODUCT_BYID = "http://localhost:4600/api/fetchproduct/";
const ADD_TO_CART = "http://localhost:4600/api/addusercart";
//const ADD_TO_CART = "http://localhost:4600/api/addcart";

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

export const AddtoCart = id => {
  return axios.post(ADD_TO_CART, config);
};
