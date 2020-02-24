import { combineReducers } from "redux";
import { registerUser } from "../reducer/user/user";

const reducers = combineReducers({ registerRed: registerUser });

export default reducers;
