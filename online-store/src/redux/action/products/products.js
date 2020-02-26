import {
  FETCH_PRODUCT_DATA,
  LOADING,
  SHOW_ERROR,
  FETCH_PRODUCT_BYID
} from "./product.type";
import { fetchProducts, fetchProductsId } from "../../api/products/products";

export const ProductInfo = () => {
  return async dispatch => {
    try {
      dispatch({ type: LOADING });
      let response = await fetchProducts();
      setTimeout(() => {
        dispatch({ type: FETCH_PRODUCT_DATA, payload: response.data });
      }, 1000);
    } catch (ex) {
      dispatch({ type: SHOW_ERROR, payload: ex.response.data });
    }
  };
};

export const fetchProductById = id => {
  return async dispatch => {
    try {
      dispatch({ type: LOADING });
      let response = await fetchProductsId(id);
      setTimeout(() => {
        dispatch({ type: FETCH_PRODUCT_BYID, payload: response.data });
      }, 1000);
    } catch (ex) {
      dispatch({ type: SHOW_ERROR, payload: ex.response.data });
    }
  };
};
