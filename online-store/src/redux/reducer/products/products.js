import {
  FETCH_PRODUCT_DATA,
  LOADING,
  SHOW_ERROR,
  FETCH_PRODUCT_BYID,
  ADD_CART,
  ADD_USERCART,
  REMOVE_CART,
  ADD_QUENTITY,
  REMOVE_QUENTITY,
  FETCH_PRODUCT_BYCATEGORY
} from "../../action/products/product.type";
import { LOGGED_USER, LOGIN_USER } from "../../action/user/user.type";
import {
  CartUtility,
  AddQuentityUtility,
  RemoveQuentityUtility
} from "./cart.utility";

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

export const ShowProductByCategory = (state = {}, action) => {
  console.log(state);
  switch (action.type) {
    case LOADING:
      return { loading: true };

    case FETCH_PRODUCT_BYCATEGORY:
      return { ...state, item: action.payload, loading: false };
    case SHOW_ERROR:
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};

const INITIAL_STATE = {
  // loading: true,

  items: []
};

export const AddToCart = (state = INITIAL_STATE, action) => {
  //console.log(action);
  console.log(state.items, action);
  switch (action.type) {
    case LOADING:
      return { ...state, loading: state.loading };
    case LOGGED_USER:
      return { loggedin: true, item: action.payload };
    case ADD_USERCART:
      return { loggedin: true, item: action.payload };

    case ADD_CART:
      return {
        ...state,

        items: CartUtility(state.items, action.payload),
        loading: false
      };

    case REMOVE_CART:
      return {
        ...state,

        items: state.items.filter(
          data => data.data._id !== action.payload.data._id
        ),
        loading: false
      };

    case ADD_QUENTITY:
      return {
        ...state,
        loading: false,
        addquentity: AddQuentityUtility(state.items, action.payload)
      };

    case REMOVE_QUENTITY:
      return {
        ...state,
        loading: false,
        removequentity: RemoveQuentityUtility(state.items, action.payload)
      };
    case LOGGED_USER:
      return { loggedin: true };

    default:
      return state;
  }
};

// export const AddToUserCart = (state = INITIAL_STATE, action) => {
//   console.log(state, action);
//   switch (action.type) {
//     case LOADING:
//       return { ...state, loading: state.loading };
//     case LOGGED_USER:
//       return { loggedin: true };
//     default:
//       return state;
//   }
// };
