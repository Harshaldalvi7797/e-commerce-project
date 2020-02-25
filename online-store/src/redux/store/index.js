import { combineReducers } from "redux";
import { registerUser, LoginUser } from "../reducer/user/user";
import { ShowProductDetails } from "../reducer/products/products";

const reducers = combineReducers({
  registerRed: registerUser,
  login: LoginUser,
  details: ShowProductDetails
});

export default reducers;
