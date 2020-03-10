import { combineReducers } from "redux";
import { registerUser, LoginUser } from "../reducer/user/user";
import storage from "redux-persist/lib/storage";

import {
  ShowProducts,
  ShowProductById,
  AddToCart,
  ShowProductByCategory
} from "../reducer/products/products";
import { ForgetPass } from "../reducer/password/password";
import { ContactSend } from "../reducer/contact/contact";

const reducers = combineReducers({
  registerRed: registerUser,
  login: LoginUser,
  details: ShowProducts,
  shopProducts: ShowProductById,
  cart: AddToCart,
  contact: ContactSend,
  fetchproductsByCategory: ShowProductByCategory,
  pass: ForgetPass
  // usercart: AddToUserCart
});
// fetchproductsByCategory: ShowProductByCategory

export default reducers;
export const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};
