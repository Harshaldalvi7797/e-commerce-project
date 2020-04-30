import { LOGIN_ADMIN, ERROR } from "./login.type";
import { Login } from "../../api/Login/login";
import { history } from "../../../helpers/history/index";

export const LoginUser = item => {
  return async dispatch => {
    try {
      let user = await Login(item);
      console.log(user);
      localStorage.setItem("currentuser", JSON.stringify(user));
      dispatch({ type: LOGIN_ADMIN, payload: user.data });
      alert("Login Done");
      history.push("/home");

      window.location.reload();
    } catch (ex) {
      dispatch({ type: ERROR, payload: ex });
    }
  };
};
