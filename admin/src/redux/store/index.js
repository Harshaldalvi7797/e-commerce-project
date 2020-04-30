import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { LoginUser } from "../reducer/Login/login";
import { product } from "../reducer/product/product";
const reducers = combineReducers({
  login: LoginUser,
  product: product

  // usercart: AddToUserCart
});
// fetchproductsByCategory: ShowProductByCategory

export default reducers;
export const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};
