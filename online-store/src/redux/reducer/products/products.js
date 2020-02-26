import {
  FETCH_PRODUCT_DATA,
  LOADING,
  SHOW_ERROR,
  FETCH_PRODUCT_BYID
} from "../../action/products/product.type";

export const ShowProducts = (state = {}, action) => {
  switch (action.type) {
    case LOADING:
      return { loading: true };

    case FETCH_PRODUCT_DATA:
      return { ...state, item: action.payload, loading: false };
    case SHOW_ERROR:
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};

export const ShowProductById = (state = {}, action) => {
  switch (action.type) {
    case LOADING:
      return { loading: true };

    case FETCH_PRODUCT_BYID:
      return { ...state, item: action.payload, loading: false };
    case SHOW_ERROR:
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};
