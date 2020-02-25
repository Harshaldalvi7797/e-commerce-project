import { FETCH_PRODUCT_DATA, LOADING, SHOW_ERROR } from "./product.type";
import { fetchProducts } from "../../api/products/products";

export const ProductInfo = () => {
  return async dispatch => {
    try {
      dispatch({ type: LOADING });
      let response = await fetchProducts();
      dispatch({ type: FETCH_PRODUCT_DATA, payload: response.data });
    } catch (ex) {
      dispatch({ type: SHOW_ERROR, payload: ex.response.data });
    }
  };
};
