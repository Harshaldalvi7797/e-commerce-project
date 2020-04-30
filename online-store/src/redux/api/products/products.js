import axios from "axios";
import { AddToCart } from "../../action/products/products";

const PRODUCTS_ENDPOINT = "http://localhost:4600/api/fetchproduct";

const FETCH_PRODUCT_BYCATEGORY = "http://localhost:4600/api/fetchproducts/";
//

const FETCH_PRODUCT_BYID = "http://localhost:4600/api/fetchproduct/";
//const ADD_TO_CART = "http://localhost:4600/api/addusercart";
const ADD_TO_CART = "http://localhost:4600/api/addcart";

let config = {
  headers: {
    "Content-type": "application/json"
  }
};

export const fetchProducts = () => {
  return axios.get(PRODUCTS_ENDPOINT, config);
};
// export const fetchProducts = category => {
//   return axios.get(PRODUCTS_ENDPOINT, config);
// };

export const fetchProductsId = id => {
  return axios.get(FETCH_PRODUCT_BYID + id, config);
};

export const fetchProductsCategory = subcategory => {
  console.log(FETCH_PRODUCT_BYCATEGORY + subcategory);
  return axios.get(FETCH_PRODUCT_BYCATEGORY + subcategory, config);
};

export const AddtoCart = data => {
  return axios.post(ADD_TO_CART, JSON.stringify(data), config);
};
