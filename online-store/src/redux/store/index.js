import { combineReducers } from "redux";
import { registerUser, LoginUser } from "../reducer/user/user";

const reducers = combineReducers({
  registerRed: registerUser,
  login: LoginUser
});

export default reducers;
