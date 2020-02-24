import { combineReducers } from "redux";
import { registerUser } from "../reducer/user/user";

const reducers = combineReducers({ register: registerUser });

export default reducers;
 