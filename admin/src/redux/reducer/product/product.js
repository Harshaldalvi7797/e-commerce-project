import { ADD_PRODUCT, ERROR } from "../../action/product/product.type";
export const product = (state = {}, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
};
