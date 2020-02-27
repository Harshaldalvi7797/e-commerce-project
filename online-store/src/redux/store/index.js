import { combineReducers } from "redux";
import { registerUser, LoginUser } from "../reducer/user/user";
import storage from "redux-persist/lib/storage";

import {
  ShowProducts,
  ShowProductById
  // AddToCart
} from "../reducer/products/products";

const reducers = combineReducers({
  registerRed: registerUser,
  login: LoginUser,
  details: ShowProducts,
  shopProducts: ShowProductById
  // cart: AddToCart
});

export default reducers;
// export const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["cart"]
// };
