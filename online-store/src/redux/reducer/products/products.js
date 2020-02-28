import {
  FETCH_PRODUCT_DATA,
  LOADING,
  SHOW_ERROR,
  FETCH_PRODUCT_BYID,
  ADD_CART,
  REMOVE_CART
} from "../../action/products/product.type";
import { CartUtility } from "./cart.utility";

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
const INITIAL_STATE = {
  loading: true,
  items: []
};

export const AddToCart = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case LOADING:
      return { ...state, loading: state.loading };
    case ADD_CART:
      return {
        ...state,

        data: CartUtility(state.data, action.payload),
        loading: false
      };
    case REMOVE_CART:
      return {
        ...state,
        loading: false,
        items: state.item.filter(data => data.data._id !== action.payload._id)
      };
    default:
      return state;
  }
};
