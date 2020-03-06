import {
  FETCH_PRODUCT_DATA,
  LOADING,
  SHOW_ERROR,
  FETCH_PRODUCT_BYID,
  ADD_CART,
  REMOVE_CART,
  ADD_QUENTITY,
  REMOVE_QUENTITY
} from "./product.type";
import {
  fetchProducts,
  fetchProductsId,
  AddtoCart
} from "../../api/products/products";
import { history } from "../../../helpers/history/index";

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

export const AddToCart = id => {
  return async dispatch => {
    try {
      dispatch({ type: LOADING });
      let response = await fetchProductsId(id);
      console.log(response);
      //let response = await AddtoCart(id);

      setTimeout(() => {
        dispatch({ type: ADD_CART, payload: response.data });

        history.push("/cart");
        window.location.reload();
      }, 1000);
    } catch (ex) {
      dispatch({ type: SHOW_ERROR, payload: ex.response.data });
    }
  };
};
export const RemoveCart = id => {
  console.log(id);
  return async dispatch => {
    try {
      dispatch({ type: LOADING });
      let response = await fetchProductsId(id);
      // let response = await AddtoCart(id);
      setTimeout(() => {
        dispatch({ type: REMOVE_CART, payload: response.data });

        history.push("/cart");
        window.location.reload();
      }, 1000);
    } catch (ex) {
      // dispatch({ type: SHOW_ERROR, payload: ex.response.data });
    }
  };
};

export const AddQuentity = data => {
  console.log(data);
  return async dispatch => {
    try {
      dispatch({ type: LOADING });
      // let response = await fetchProductsId(id);
      // let response = await AddtoCart(id);
      setTimeout(() => {
        dispatch({ type: ADD_QUENTITY, payload: data });

        history.push("/cart");
        window.location.reload();
      }, 1000);
    } catch (ex) {
      // dispatch({ type: SHOW_ERROR, payload: ex.response.data });
    }
  };
};

export const RemoveQuentity = data => {
  console.log(data);
  return async dispatch => {
    try {
      dispatch({ type: LOADING });

      setTimeout(() => {
        dispatch({ type: REMOVE_QUENTITY, payload: data });

        history.push("/cart");
        window.location.reload();
      }, 1000);
    } catch (ex) {
      // dispatch({ type: SHOW_ERROR, payload: ex.response.data });
    }
  };
};

// export const RemoveCart = id => {
//   // console.log(id);
//   return async dispatch => {
//     try {
//       dispatch({ type: LOADING });
//       let response = await fetchProductsId(id);
//       console.log(id);
//       //console.log(response.data);
//       // let response = await AddtoCart(id);
//       setTimeout(() => {
//         dispatch({ type: ADD_CART, payload: response.data });

//         history.push("/cart");
//       }, 1000);
//     } catch (ex) {
//       dispatch({ type: SHOW_ERROR, payload: ex.response.data });
//     }
//   };
// };
