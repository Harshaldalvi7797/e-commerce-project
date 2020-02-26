import { combineReducers } from "redux";
import { registerUser, LoginUser } from "../reducer/user/user";
import { ShowProducts, ShowProductById } from "../reducer/products/products";

const reducers = combineReducers({
  registerRed: registerUser,
  login: LoginUser,
  details: ShowProducts,
  shopProducts: ShowProductById
});

export default reducers;
