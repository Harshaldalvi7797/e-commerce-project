import { combineReducers } from "redux";
import { registerUser, LoginUser } from "../reducer/user/user";
import {
  ShowProducts,
  ShowProductById,
  AddToCart
} from "../reducer/products/products";

const reducers = combineReducers({
  registerRed: registerUser,
  login: LoginUser,
  details: ShowProducts,
  shopProducts: ShowProductById,
  cart: AddToCart
});

export default reducers;
